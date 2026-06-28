import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Hero from "@/components/home/Hero";
import GISDashboard from "@/components/GISDashboard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import { services, industries, projects } from "@/lib/data";

export default function Home() {
  const featured = projects[0];

  return (
    <main>
      <Hero />

      {/* Services preview */}
      <section className="bg-white py-24 sm:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="Every layer of software your organisation needs."
              intro="One team for the whole stack — from citizen-facing portals to the infrastructure underneath."
            />
            <Reveal>
              <Link href="/services" className="btn-soft">
                All services <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 70}>
                <article className="card group h-full p-7 transition-shadow duration-300 hover:shadow-lift">
                  <span className="text-sm font-700 text-brand-300">{s.id}</span>
                  <h3 className="mt-3 text-xl font-700 text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-brand-50 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured work"
            title="Government Insurance Scheme (GIS) Platform"
            intro="Deployed across five cities — each custom-built for the government organisation it serves, on one secure, maintained core."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <GISDashboard />
              <p className="mt-3 text-[0.7rem] font-600 uppercase tracking-wide text-muted">
                Illustrative interface — representative of the live system
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p className="text-lg leading-relaxed text-muted">
                  {featured.summary}
                </p>
                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {featured.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex gap-3 text-[0.95rem] leading-snug text-ink">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                        <Check size={13} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${featured.slug}`}
                  className="btn-primary mt-9"
                >
                  View this project <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries preview */}
      <section className="bg-white py-24 sm:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industries"
              title="Built for sectors that cannot afford to fail."
              intro="Wherever software has to be accurate, secure, and dependable."
            />
            <Reveal>
              <Link href="/industries" className="btn-soft">
                All industries <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 60}>
                <div className="card h-full p-6">
                  <span className="text-sm font-700 text-brand-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-700 leading-snug text-ink">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {ind.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
