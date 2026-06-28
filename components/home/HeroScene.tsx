"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight three.js scene for the hero: a rotating wireframe icosahedron
 * wrapped in a particle shell, with 5 glowing "city" nodes connected in a ring
 * — a nod to the GIS platform running across five cities.
 *
 * Responsiveness:
 * - The canvas tracks its CONTAINER via ResizeObserver (not just window resize),
 *   so it stays sharp and correctly sized through layout reflows, font loads,
 *   orientation changes, and the grid switching between stacked / side-by-side.
 * - Lighter particle count and pixel ratio on small screens.
 * - three is dynamically imported (kept out of SSR / code-split).
 * - Respects prefers-reduced-motion (renders a single static frame).
 * - Everything is disposed on unmount to avoid WebGL context leaks.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 640px)").matches;

    let renderer: any = null;
    let frameId = 0;
    let disposed = false;
    const cleanups: Array<() => void> = [];

    (async () => {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;
      const el = mountRef.current;

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
      mount.appendChild(renderer.domElement);

      const pivot = new THREE.Group(); // parallax
      const spin = new THREE.Group(); // continuous rotation
      pivot.add(spin);
      scene.add(pivot);
      spin.rotation.x = 0.35;

      // faint solid core
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.8, 1),
        new THREE.MeshBasicMaterial({ color: 0x2c5da8, transparent: true, opacity: 0.16 })
      );
      spin.add(core);

      // wireframe
      const wire = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.85, 1)),
        new THREE.LineBasicMaterial({ color: 0x9cc0ef, transparent: true, opacity: 0.5 })
      );
      spin.add(wire);

      // particle shell (lighter on small screens)
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

      // 5 city nodes
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

      // ring connecting the nodes
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

      // pointer parallax (fine-pointer devices only)
      const target = { x: 0, y: 0 };
      if (!reduce && window.matchMedia("(pointer:fine)").matches) {
        const onMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
          target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.7;
        };
        window.addEventListener("pointermove", onMove);
        cleanups.push(() => window.removeEventListener("pointermove", onMove));
      }

      // keep the canvas locked to the container's real size
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

      let ro: ResizeObserver | null = null;
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(onResize);
        ro.observe(el);
        cleanups.push(() => ro?.disconnect());
      }
      window.addEventListener("resize", onResize);
      cleanups.push(() => window.removeEventListener("resize", onResize));

      const clock = new THREE.Clock();
      const render = () => renderer.render(scene, camera);

      if (reduce) {
        render();
      } else {
        const loop = () => {
          frameId = requestAnimationFrame(loop);
          const t = clock.getElapsedTime();
          spin.rotation.y += 0.0018;
          pivot.rotation.x += (target.y * 0.5 - pivot.rotation.x) * 0.05;
          pivot.rotation.y += (target.x * 0.5 - pivot.rotation.y) * 0.05;
          nodes.forEach((m, i) => m.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.28));
          render();
        };
        loop();
      }

      // dispose helpers
      cleanups.push(() => {
        scene.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            const m = obj.material;
            Array.isArray(m) ? m.forEach((x: any) => x.dispose()) : m.dispose();
          }
        });
      });
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      cleanups.forEach((fn) => fn());
      if (renderer) {
        renderer.dispose();
        const el = renderer.domElement;
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" aria-hidden />;
}