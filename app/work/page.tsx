import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/ui/CTABand";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from NIM Technology Solutions, including the Government Insurance Scheme (GIS) platform deployed across five cities.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our work"
        title="Systems that are live, and relied on."
        intro="A look at what we have built. Each project is custom — designed for the organisation it serves and maintained long after launch."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/work/${p.slug}`}
                className="card group block overflow-hidden p-8 transition-shadow duration-300 hover:shadow-lift sm:p-10"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <span className="text-xs font-700 uppercase tracking-[0.16em] text-brand-500">
                      {p.sector}
                    </span>
                    <h2 className="mt-3 text-2xl font-700 text-ink sm:text-3xl">
                      {p.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-600 text-brand-600 group-hover:text-brand-700">
                      View project <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 lg:w-72 lg:shrink-0">
                    {p.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="rounded-2xl bg-brand-50 p-4 text-center"
                      >
                        <div className="text-xl font-800 text-brand-700">
                          {h.value}
                        </div>
                        <div className="mt-1 text-[0.6rem] font-600 uppercase tracking-wide text-muted">
                          {h.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </main>
  );
}