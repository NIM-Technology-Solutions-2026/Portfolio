import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/ui/CTABand";
import { services, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web and mobile apps, government systems, cloud, security, AI, and ongoing support from NIM Technology Solutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="What we do"
        title="Software services, end to end."
        intro="From the first conversation about your workflow to long-term support after launch, we cover every layer your organisation needs."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 60}>
              <article className="card group h-full p-7 transition-shadow duration-300 hover:shadow-lift">
                <span className="text-sm font-700 text-brand-300">{s.id}</span>
                <h2 className="mt-3 text-xl font-700 text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-5 text-3xl font-700 leading-tight text-ink sm:text-4xl">
              A clear path from idea to dependable system.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 60}>
                <div className="card h-full p-6">
                  <span className="text-2xl font-800 text-brand-600">
                    {p.step}
                  </span>
                  <h3 className="mt-4 text-lg font-700 text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Not sure where to start?" text="Tell us the problem you are trying to solve — we will help you scope it." />
    </main>
  );
}