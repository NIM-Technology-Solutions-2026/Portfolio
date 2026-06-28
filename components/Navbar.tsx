"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // entrance stagger + magnetic CTA
  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      if (!active || !headerRef.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const ctx = gsap.context(() => {
        if (!reduce) {
          gsap.from(".nav-item", {
            y: -14,
            opacity: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: "power3.out",
            delay: 0.05,
          });
        }
      }, headerRef);

      let detach: (() => void) | undefined;
      const btn = ctaRef.current;
      if (btn && !reduce && window.matchMedia("(pointer:fine)").matches) {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.4);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        detach = () => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        };
      }

      cleanup = () => {
        ctx.revert();
        detach?.();
      };
    })();

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  // animate mobile panel items when opened
  useEffect(() => {
    if (!open) return;
    let active = true;
    (async () => {
      const { gsap } = await import("gsap");
      if (!active || !panelRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        panelRef.current.querySelectorAll(".m-item"),
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.35, ease: "power3.out" }
      );
    })();
    return () => {
      active = false;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkText = scrolled ? "text-ink/70" : "text-white/85";
  const linkHover = scrolled ? "hover:text-brand-700" : "hover:text-white";
  const underline = scrolled ? "bg-brand-600" : "bg-white";

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-white/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[76px] items-center justify-between">
        <Link
          href="/"
          aria-label="NIM Technology Solutions home"
          className="nav-item transition-transform duration-200 hover:scale-[1.02]"
        >
          <Logo tone={scrolled ? "brand" : "white"} uid="nav" height={56} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item group relative rounded-full px-4 py-2 text-sm font-600 transition-colors ${linkText} ${linkHover}`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-3 bottom-1.5 h-0.5 origin-left rounded-full ${underline} transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}

          <Link
            ref={ctaRef}
            href="/contact"
            className={`nav-item ml-3 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-600 transition-colors duration-200 ${
              scrolled
                ? "bg-brand-600 text-white shadow-soft hover:bg-brand-700"
                : "bg-white text-brand-700 hover:bg-brand-50"
            }`}
          >
            Start a project
          </Link>
        </nav>

        <button
          className={`nav-item grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
            scrolled ? "text-ink hover:bg-brand-50" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div ref={panelRef} className="border-t border-hairline bg-white lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`m-item rounded-2xl px-4 py-3 text-base font-600 transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink/80 hover:bg-brand-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="m-item btn-primary mt-3 w-full">
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}