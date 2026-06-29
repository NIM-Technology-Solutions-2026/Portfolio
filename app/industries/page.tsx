import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/ui/CTABand";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "NIM Technology Solutions builds software across government, insurance, finance, healthcare, education, and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Industries"
        title="Built for the sectors that cannot afford to fail."
        intro="We work across government and private industry — wherever software has to be accurate, secure, and dependable."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 60}>
              <article className="card h-full p-7">
                <span className="text-sm font-700 text-brand-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-700 leading-snug text-ink">
                  {ind.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{ind.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Work in a sector not listed?"
        text="Our approach adapts. If your work depends on reliable software, we can help."
      />
    </main>
  );
}