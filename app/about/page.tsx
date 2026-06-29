import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import { whyUs, technologies, commitments, testimonials, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "NIM Technology Solutions is a software company serving government organisations and private enterprises — built on quality and service.",
  alternates: { canonical: "/about" },
};

const team = [
  { k: "Engineering", v: "Full-stack" },
  { k: "Design", v: "UI / UX" },
  { k: "Delivery", v: "Project leads" },
  { k: "Quality", v: "QA & testing" },
  { k: "Security", v: "Compliance" },
  { k: "Support", v: "Post-launch" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="We build software that institutions depend on."
        intro="A focused software company serving government organisations and private enterprises — guided by two principles: build to the highest quality, and back it with service that does not stop at delivery."
      />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 text-3xl font-700 leading-tight text-ink sm:text-4xl">
              Accuracy, security, and accountability — on every project.
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">
                {company.name} designs and delivers custom systems end to end.
                Our work in the public sector demands accuracy, security, and
                accountability — and we hold every project, public or private,
                to that same standard.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We are small enough to stay accountable and experienced enough
                to ship systems governments trust. The people who build your
                software are the people you talk to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Why NIM"
            title="Quality and service, not as a slogan but as a standard."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 70}>
                <div className="card flex h-full gap-5 p-8">
                  <span className="text-lg font-800 text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-700 text-ink">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology + Security */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Technology"
              title="A modern, proven toolset."
              intro="We choose technology for reliability and longevity, so your system stays maintainable for years."
            />
            <Reveal className="mt-8">
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline bg-brand-50 px-4 py-2 text-sm font-600 text-brand-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Security & compliance"
              title="Built to public-sector standards."
              intro="Add your formal certifications here as you earn them — these are the practices behind them."
            />
            <div className="mt-8 grid gap-4">
              {commitments.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="card flex items-start gap-4 p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600">
                      <ShieldCheck size={20} />
                    </span>
                    <div>
                      <h3 className="font-700 text-ink">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Team"
              title="Engineers, designers, and project leads in one focused team."
              intro="Small, senior, and accountable. We keep teams tight so quality and communication never slip."
            />
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {team.map((r) => (
                <Reveal key={r.k}>
                  <div className="card p-5">
                    <div className="text-base font-800 text-ink">{r.v}</div>
                    <div className="mt-1 text-[0.6rem] font-600 uppercase tracking-wide text-muted">
                      {r.k}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Client voices" title="In their words." />
          <p className="mt-3 text-xs font-600 uppercase tracking-wide text-muted">
            Sample placeholders — replace with real feedback in lib/data.ts
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 70}>
                <figure className="card flex h-full flex-col p-8">
                  <span className="text-5xl font-800 leading-none text-brand-200">
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 text-lg leading-relaxed text-ink">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-hairline pt-5">
                    <div className="font-700 text-ink">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}