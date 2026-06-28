import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import GISDashboard from "@/components/GISDashboard";
import CTABand from "@/components/ui/CTABand";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.short,
    description: project.summary,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      <PageHeader
        eyebrow={project.sector}
        title={project.name}
        intro={project.summary}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-600 text-brand-600 hover:text-brand-700"
            >
              <ArrowLeft size={16} /> All work
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {project.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 60}>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-800 text-brand-700">
                    {h.value}
                  </div>
                  <div className="mt-1 text-xs font-600 uppercase tracking-wide text-muted">
                    {h.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <GISDashboard />
            <p className="mt-3 text-[0.7rem] font-600 uppercase tracking-wide text-muted">
              Illustrative interface — replace with real screenshots in
              components/GISDashboard.tsx
            </p>
          </Reveal>

          <div className="mt-16 max-w-3xl">
            <Reveal>
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-5 text-3xl font-700 leading-tight text-ink sm:text-4xl">
                What the system does
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {project.features.map((f, i) => (
                <Reveal key={f} delay={(i % 2) * 50}>
                  <li className="flex gap-3 leading-snug text-ink">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title="Need a system like this?"
        text="We can build a platform tailored to your organisation, on a secure and maintainable core."
      />
    </main>
  );
}
