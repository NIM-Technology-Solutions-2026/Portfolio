"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero scene: a rotating wireframe icosahedron wrapped in a particle shell,
 * with 5 glowing "city" nodes connected in a ring — a nod to the GIS platform.
 *
 * Key behaviours:
 * - EDGES FADE into the hero. The WebGL canvas is masked with a radial gradient
 *   so it melts into the gradient background instead of showing a hard square.
 * - INTERACTIVE again: pointer movement parallax-tilts the whole scene.
 * - FAST on mobile. three.js is heavy, so:
 *     · a lightweight CSS/SVG fallback paints instantly,
 *     · the WebGL bundle is loaded only when the browser is idle (requestIdleCallback),
 *     · constrained devices (data-saver / <=2GB RAM) and reduced-motion users keep
 *       the CSS fallback and never download three.js at all.
 * - The canvas tracks its container via ResizeObserver, and everything is disposed
 *   on unmount to avoid WebGL context leaks.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglActive, setWebglActive] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navAny = navigator as any;
    const lowEnd =
      navAny.connection?.saveData === true ||
      (typeof navAny.deviceMemory === "number" &&
        navAny.deviceMemory > 0 &&
        navAny.deviceMemory <= 2);

    // Reduced motion or constrained device → keep the lightweight CSS fallback,
    // and skip downloading three.js entirely.
    if (reduce || lowEnd) return;

    let renderer: any = null;
    let frameId = 0;
    let disposed = false;
    let started = false;
    const cleanups: Array<() => void> = [];

    const init = async () => {
      if (started || disposed) return;
      started = true;

      const THREE = await import("three");
      if (disposed || !mountRef.current) return;
      const el = mountRef.current;
      const small = window.matchMedia("(max-width: 640px)").matches;

      const size = () => ({
        w: Math.max(el.clientWidth, 1),
        h: Math.max(el.clientHeight, 1),
      });
      let { w: width, h: height } = size();

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 6.4);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
      renderer.domElement.style.display = "block";
      el.appendChild(renderer.domElement);

      const pivot = new THREE.Group(); // parallax
      const spin = new THREE.Group(); // continuous rotation
      pivot.add(spin);
      scene.add(pivot);
      spin.rotation.x = 0.35;

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.8, 1),
        new THREE.MeshBasicMaterial({ color: 0x2c5da8, transparent: true, opacity: 0.16 })
      );
      spin.add(core);

      const wire = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.85, 1)),
        new THREE.LineBasicMaterial({ color: 0x9cc0ef, transparent: true, opacity: 0.5 })
      );
      spin.add(wire);

      const COUNT = small ? 380 : 650;
      const positions = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const r = 2.5 + Math.random() * 0.55;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      const ptsGeo = new THREE.BufferGeometry();
      ptsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const points = new THREE.Points(
        ptsGeo,
        new THREE.PointsMaterial({
          color: 0xdce8f8,
          size: 0.035,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true,
        })
      );
      spin.add(points);

      const nodes: any[] = [];
      const nodeGeo = new THREE.SphereGeometry(0.07, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const seeds = [
        [1.8, 0.3, 0.4],
        [-1.1, 1.3, 0.8],
        [0.4, -1.6, 0.9],
        [-1.4, -0.5, -1.1],
        [0.9, 0.8, -1.5],
      ];
      seeds.forEach((s) => {
        const m = new THREE.Mesh(nodeGeo, nodeMat);
        m.position.set(s[0], s[1], s[2]).setLength(1.85);
        spin.add(m);
        nodes.push(m);
      });

      const linePts: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i].position;
        const b = nodes[(i + 1) % nodes.length].position;
        linePts.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePts, 3));
      const lines = new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({ color: 0xbfd6f5, transparent: true, opacity: 0.55 })
      );
      spin.add(lines);

      // render() is declared before anything that calls it (onResize / loop)
      const render = () => renderer.render(scene, camera);

      const onResize = () => {
        const s = size();
        if (s.w === width && s.h === height) return;
        width = s.w;
        height = s.h;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        render();
      };

      // INTERACTIVITY — pointer parallax (mouse + touch drag), restored.
      const target = { x: 0, y: 0 };
      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.9;
        target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.9;
      };
      const onLeave = () => {
        target.x = 0;
        target.y = 0;
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", onMove));
      cleanups.push(() => window.removeEventListener("pointerleave", onLeave));

      let ro: ResizeObserver | null = null;
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(onResize);
        ro.observe(el);
        cleanups.push(() => ro?.disconnect());
      }
      window.addEventListener("resize", onResize);
      cleanups.push(() => window.removeEventListener("resize", onResize));

      setWebglActive(true); // crossfade from CSS fallback to the live canvas

      const clock = new THREE.Clock();
      const loop = () => {
        frameId = requestAnimationFrame(loop);
        const t = clock.getElapsedTime();
        spin.rotation.y += 0.0018;
        pivot.rotation.x += (target.y * 0.6 - pivot.rotation.x) * 0.06;
        pivot.rotation.y += (target.x * 0.6 - pivot.rotation.y) * 0.06;
        nodes.forEach((m, i) => m.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.28));
        render();
      };
      loop();

      cleanups.push(() => {
        scene.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            const m = obj.material;
            Array.isArray(m) ? m.forEach((x: any) => x.dispose()) : m.dispose();
          }
        });
      });
    };

    // Defer the heavy WebGL work until the browser is idle → faster first paint.
    const ric: any =
      (window as any).requestIdleCallback || ((cb: any) => setTimeout(() => cb(), 250));
    const cic: any = (window as any).cancelIdleCallback || clearTimeout;
    const idleId = ric(() => init(), { timeout: 1800 });

    return () => {
      disposed = true;
      cic(idleId);
      cancelAnimationFrame(frameId);
      cleanups.forEach((fn) => fn());
      if (renderer) {
        renderer.dispose();
        const el = renderer.domElement;
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* Lightweight CSS/SVG fallback — paints instantly, and is the full
          experience for reduced-motion / low-end / data-saver visitors. */}
      <div
        className="absolute inset-0 grid place-items-center transition-opacity duration-700"
        style={{ opacity: webglActive ? 0 : 1 }}
        aria-hidden
      >
        <div className="relative aspect-square w-[80%]">
          <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(183,208,240,0.55),rgba(44,93,168,0.18)_55%,transparent_72%)] blur-[2px]" />
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full animate-[spin_26s_linear_infinite] motion-reduce:animate-none"
          >
            <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(220,232,248,0.25)" strokeWidth="0.8" />
            <polygon
              points="100,30 166.6,78.4 141.1,156.6 58.9,156.6 33.4,78.4"
              fill="none"
              stroke="rgba(191,214,245,0.5)"
              strokeWidth="1"
            />
            <circle cx="100" cy="100" r="34" fill="rgba(44,93,168,0.18)" stroke="rgba(156,192,239,0.4)" strokeWidth="0.6" />
            {[
              [100, 30],
              [166.6, 78.4],
              [141.1, 156.6],
              [58.9, 156.6],
              [33.4, 78.4],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3.6" fill="#ffffff" />
            ))}
          </svg>
        </div>
      </div>

      {/* WebGL canvas mounts here; the radial mask fades its edges into the hero. */}
      <div
        ref={mountRef}
        className="absolute inset-0 h-full w-full transition-opacity duration-700"
        style={{
          opacity: webglActive ? 1 : 0,
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, #000 52%, rgba(0,0,0,0.35) 70%, transparent 80%)",
          maskImage:
            "radial-gradient(circle at 50% 50%, #000 52%, rgba(0,0,0,0.35) 70%, transparent 80%)",
        }}
        aria-hidden
      />
    </div>
  );
}