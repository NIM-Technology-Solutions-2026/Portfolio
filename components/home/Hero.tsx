"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { company, stats } from "@/lib/data";
import HeroScene from "./HeroScene";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let active = true;

    (async () => {
      const { gsap } = await import("gsap");
      if (!active) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
        tl.from("[data-h='eyebrow']", { y: 18, opacity: 0 })
          .from("[data-h='line']", { y: 30, opacity: 0, stagger: 0.12 }, "-=0.4")
          .from("[data-h='intro']", { y: 18, opacity: 0 }, "-=0.5")
          .from("[data-h='cta'] > *", { y: 16, opacity: 0, stagger: 0.1 }, "-=0.5")
          .from("[data-h='scene']", { opacity: 0, scale: 0.92, duration: 1.1 }, "-=0.95")
          .from("[data-h='stat']", { y: 22, opacity: 0, stagger: 0.09 }, "-=0.7");
      }, root);
    })();

    return () => {
      active = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden brand-gradient text-white">
      <div className="pointer-events-none absolute inset-0 soft-dots opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
        aria-hidden
      />

      <div className="shell relative pb-20 pt-28 sm:pb-24 sm:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* copy */}
          <div className="lg:col-span-6">
            <span data-h="eyebrow" className="eyebrow eyebrow-light">
              Government &amp; Enterprise Software
            </span>

            <h1 className="mt-6 text-[1.95rem] font-800 leading-[1.08] [overflow-wrap:break-word] sm:text-5xl lg:text-[3.7rem]">
              <span data-h="line" className="block">
                Software that serves
              </span>
              <span data-h="line" className="block text-brand-200">
                government and business.
              </span>
            </h1>

            <p data-h="intro" className="mt-7 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              {company.shortName} designs and delivers custom systems for public
              bodies and private companies — from a Government Insurance Scheme
              platform live across five cities to the software your organisation
              runs on every day.
            </p>

            <div
              data-h="cta"
              className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="/contact"
                className="btn w-full justify-center bg-white px-8 py-4 text-brand-700 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
              >
                Start a project <ArrowRight size={17} />
              </Link>
              <Link
                href="/work"
                className="btn-ghost w-full justify-center px-8 py-4 transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                See our work
              </Link>
            </div>
          </div>

          {/* 3D scene fills what used to be empty space */}
          <div data-h="scene" className="lg:col-span-6">
            <div className="relative mx-auto aspect-square h-auto w-full max-w-[340px] overflow-hidden sm:max-w-[460px] lg:max-w-[520px]">
              <div
                className="pointer-events-none absolute inset-6 rounded-full bg-white/10 blur-3xl"
                aria-hidden
              />
              <HeroScene />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              data-h="stat"
              className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 sm:p-6"
            >
              <div className="text-2xl font-800 leading-tight text-white [overflow-wrap:anywhere] sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-brand-100">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[2.5rem] bg-white" aria-hidden />
    </section>
  );
}