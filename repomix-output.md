This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
app/about/page.tsx
app/contact/page.tsx
app/globals.css
app/industries/page.tsx
app/layout.tsx
app/not-found.tsx
app/page.tsx
app/services/page.tsx
app/work/[slug]/page.tsx
app/work/page.tsx
components/ContactForm.tsx
components/Footer.tsx
components/GISDashboard.tsx
components/home/Hero.tsx
components/home/HeroScene.tsx
components/Logo.tsx
components/Navbar.tsx
components/Reveal.tsx
components/ui/CTABand.tsx
components/ui/PageHeader.tsx
components/ui/SectionHeading.tsx
lib/data.ts
next.config.mjs
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
```

# Files

## File: .gitignore
````
# dependencies
/node_modules
/.pnp
.pnp.js

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# env files
.env*.local
.env

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: app/about/page.tsx
````typescript
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
````

## File: app/contact/page.tsx
````typescript
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NIM Technology Solutions about a government or enterprise software project.",
};

export default function ContactPage() {
  const details = [
    {
      icon: Mail,
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you need built."
        intro="Whether it is a government platform or a system for your company, send us the brief and we will get back to you."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600">
                    <d.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-700 uppercase tracking-wide text-muted">
                      {d.label}
                    </span>
                    <span className="font-600 text-ink">{d.value}</span>
                  </span>
                </a>
              ))}
              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs font-700 uppercase tracking-wide text-muted">
                    Office
                  </span>
                  <span className="font-600 leading-relaxed text-ink">
                    {company.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
````

## File: app/industries/page.tsx
````typescript
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/ui/CTABand";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "NIM Technology Solutions builds software across government, insurance, finance, healthcare, education, and more.",
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
````

## File: app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nimtechsolutions.com"),
  title: {
    default: `${company.name} — Software for Government & Enterprise`,
    template: `%s · ${company.shortName}`,
  },
  description:
    "NIM Technology Solutions builds custom software for government bodies and private companies — engineered for quality and built around service.",
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
````

## File: app/not-found.tsx
````typescript
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-white px-6">
      <div className="text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-5 text-4xl font-800 text-ink sm:text-5xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
````

## File: app/page.tsx
````typescript
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
````

## File: app/services/page.tsx
````typescript
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/ui/CTABand";
import { services, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web and mobile apps, government systems, cloud, security, AI, and ongoing support from NIM Technology Solutions.",
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
````

## File: app/work/[slug]/page.tsx
````typescript
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
````

## File: app/work/page.tsx
````typescript
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
````

## File: components/ContactForm.tsx
````typescript
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // ── BACKEND INTEGRATION POINT ───────────────────────────────
    // Replace this with a real submission, e.g.:
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    console.log("Contact form submission:", data);
    // ────────────────────────────────────────────────────────────

    setSent(true);
    form.reset();
  }

  const field =
    "w-full rounded-2xl border border-hairline bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";
  const label = "mb-2 block text-xs font-700 uppercase tracking-[0.14em] text-muted";

  if (sent) {
    return (
      <div className="card flex h-full flex-col items-start justify-center p-9">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-2xl text-brand-600">
          ✓
        </span>
        <h3 className="mt-5 text-2xl font-700 text-ink">Message ready to send.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Your details were captured. Connect a backend or email service to
          deliver them — see the note in components/ContactForm.tsx.
        </p>
        <button onClick={() => setSent(false)} className="btn-soft mt-7">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className={label}>Organisation</label>
          <input id="company" name="company" className={field} placeholder="Company / department" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className={label}>Project details</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-none`}
          placeholder="Tell us about the software you need."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send message <ArrowRight size={16} />
      </button>
    </form>
  );
}
````

## File: components/Footer.tsx
````typescript
import Link from "next/link";
import Logo from "./Logo";
import { nav, company } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden brand-gradient text-white">
      <div className="pointer-events-none absolute inset-0 soft-dots opacity-30" aria-hidden />
      <div className="shell relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="white" uid="footer" height={76} />
            <p className="mt-6 max-w-xs leading-relaxed text-brand-100">
              {company.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-700 uppercase tracking-[0.18em] text-brand-200">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-700 uppercase tracking-[0.18em] text-brand-200">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-brand-100">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li className="leading-relaxed">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-200">
            © {year} {company.name}
          </p>
          <p className="text-sm text-brand-200">Quality · Service</p>
        </div>
      </div>
    </footer>
  );
}
````

## File: components/Logo.tsx
````typescript
/**
 * NIM Technology Solutions logo.
 *
 * Matches the brand mark: a bold "NIM" wordmark with "TECHNOLOGY SOLUTIONS"
 * curving beneath it in an upward (smile) arc. Transparent background and pure
 * SVG, so it stays crisp at any size and recolors for light/dark surfaces via
 * the `tone` prop (white over the blue hero/footer, brand-blue on white).
 *
 * `uid` makes the curved-text path id unique per instance — important because
 * the logo renders more than once on a page (navbar, footer, mobile menu).
 *
 * Tuning (if the tagline ever clips at the ends or looks too wide):
 *   - widen / narrow the arc → endpoints in the path: M 14 98 Q 120 150 226 98
 *   - tagline spread along the arc → `letterSpacing` on the tagline <text>
 *   - tagline size → `fontSize` on the tagline <text>
 */
export default function Logo({
  tone = "brand",
  uid = "logo",
  className = "",
  height = 44,
}: {
  tone?: "brand" | "white";
  uid?: string;
  className?: string;
  height?: number;
}) {
  const fill = tone === "white" ? "#FFFFFF" : "#2C5DA8";
  const arcId = `nim-arc-${uid}`;
  const w = (240 / 140) * height;

  return (
    <svg
      viewBox="0 0 240 140"
      height={height}
      width={w}
      role="img"
      aria-label="NIM Technology Solutions"
      className={className}
      style={{ display: "block" }}
    >
      {/* wordmark */}
      <text
        x="120"
        y="78"
        textAnchor="middle"
        fontWeight={800}
        fontSize="82"
        letterSpacing="1"
        fill={fill}
        style={{ fontFamily: "var(--font-display)" }}
      >
        NIM
      </text>

      {/* widened smile arc so the full tagline fits inside the path */}
      <defs>
        <path id={arcId} d="M 14 98 Q 120 150 226 98" fill="none" />
      </defs>
      <text
        fill={fill}
        fontSize="14"
        fontWeight={700}
        letterSpacing="1.8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          TECHNOLOGY SOLUTIONS
        </textPath>
      </text>
    </svg>
  );
}
````

## File: components/Navbar.tsx
````typescript
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
````

## File: components/Reveal.tsx
````typescript
"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
````

## File: components/ui/SectionHeading.tsx
````typescript
import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl`}
    >
      <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-5 text-3xl font-700 leading-[1.12] sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-brand-100" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
````

## File: lib/data.ts
````typescript
/**
 * All editable site content lives here. Replace these exports with
 * database / CMS / API calls later without touching any UI component.
 */

export const company = {
  name: "NIM Technology Solutions",
  shortName: "NIM",
  // New brand tagline (encodes the two core values: quality + service)
  tagline: "Engineered for quality. Built around service.",
  email: "nimtechsol@gmail.com",
  phone: "+91 9309873430",
  address:
    "Plot 6, Tulsi Nagar, Kalwaghe Layout, Buldhana 443001, Maharashtra, India",
  addressLines: [
    "Plot 6, Tulsi Nagar, Kalwaghe Layout",
    "Buldhana 443001, Maharashtra, India",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "5", label: "Cities running our GIS platform" },
  { value: "100%", label: "Custom-built, never templated" },
  { value: "2", label: "Sectors served — government & private" },
  { value: "End-to-end", label: "Build, deploy, and support" },
];

export const services = [
  {
    id: "01",
    title: "Custom Software Development",
    body: "Bespoke systems designed around your exact workflow — not off-the-shelf software you have to bend your process to fit.",
  },
  {
    id: "02",
    title: "Web Application Development",
    body: "Fast, secure, scalable web platforms and internal tools built on modern, maintainable foundations.",
  },
  {
    id: "03",
    title: "Mobile App Development",
    body: "Native and cross-platform apps for Android and iOS, designed for real-world reliability in the field.",
  },
  {
    id: "04",
    title: "Government & Public-Sector Systems",
    body: "Citizen-facing portals and administrative platforms built to the security and accountability standards public bodies require.",
  },
  {
    id: "05",
    title: "Enterprise & ERP Systems",
    body: "Integrated systems that connect finance, operations, and people across the whole organisation.",
  },
  {
    id: "06",
    title: "Cloud & DevOps",
    body: "Cloud architecture, deployment automation, and infrastructure that keeps your systems available and cost-aware.",
  },
  {
    id: "07",
    title: "API Development & Integration",
    body: "We connect your systems to payment gateways, identity providers, and third-party services through clean, documented APIs.",
  },
  {
    id: "08",
    title: "Data Engineering & Analytics",
    body: "Database design, reporting dashboards, and MIS that turn raw operational data into decisions.",
  },
  {
    id: "09",
    title: "Cybersecurity & Compliance",
    body: "Secure-by-design development, access control, audit trails, and data-protection practices from day one.",
  },
  {
    id: "10",
    title: "AI & Machine Learning",
    body: "Practical AI — document processing, prediction, and automation applied where it measurably saves time.",
  },
  {
    id: "11",
    title: "UI / UX Design",
    body: "Interfaces that ordinary people and busy officials can use without training.",
  },
  {
    id: "12",
    title: "Maintenance & Support",
    body: "Ongoing service, monitoring, and SLAs — because a system is only as good as the support behind it.",
  },
];

export const industries = [
  {
    name: "Government & Public Sector",
    body: "Citizen services, scheme administration, and internal platforms built for accountability.",
  },
  {
    name: "Insurance",
    body: "Policy, premium, and claims systems that handle real money with full audit trails.",
  },
  {
    name: "Banking & Financial Services",
    body: "Secure, compliant tools for institutions where trust is non-negotiable.",
  },
  {
    name: "Healthcare",
    body: "Records, scheduling, and care-coordination systems that protect sensitive data.",
  },
  {
    name: "Education",
    body: "Administration, enrollment, and learning platforms for institutions of any size.",
  },
  {
    name: "Manufacturing",
    body: "Operations, inventory, and process systems that keep production moving.",
  },
  {
    name: "Retail & E-commerce",
    body: "Storefronts, order management, and analytics that scale with demand.",
  },
  {
    name: "Logistics & Supply Chain",
    body: "Tracking, routing, and coordination across complex, moving operations.",
  },
];

export const whyUs = [
  {
    title: "Quality you can audit",
    body: "Clean code, documentation, and testing on every build — so the system holds up long after launch.",
  },
  {
    title: "Service that does not stop at delivery",
    body: "We stay on after go-live with monitoring, updates, and support your team can actually reach.",
  },
  {
    title: "Proven in the public sector",
    body: "Our GIS platform runs live across five cities, handling real citizens, real money, and real accountability.",
  },
  {
    title: "Security and compliance first",
    body: "Access control, audit trails, and data protection are built in from the first commit, not bolted on later.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your workflow, constraints, and goals before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, data model, and interface are planned and signed off with you.",
  },
  {
    step: "03",
    title: "Build",
    body: "We develop in reviewable increments so you see progress, not a black box.",
  },
  {
    step: "04",
    title: "Deploy",
    body: "Tested, secured, and rolled out — to one site or many — with zero-surprise launches.",
  },
  {
    step: "05",
    title: "Support",
    body: "We maintain, monitor, and improve the system under a clear service agreement.",
  },
];

export const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Java", ".NET",
  "PostgreSQL", "MySQL", "MongoDB", "REST & GraphQL", "AWS", "Azure",
  "Docker", "Kubernetes", "React Native",
];

export const commitments = [
  {
    title: "Secure development lifecycle",
    body: "Security reviewed at every stage — from design and code review to deployment hardening.",
  },
  {
    title: "Data protection & privacy",
    body: "Sensitive citizen and business data handled with encryption, access control, and clear retention rules.",
  },
  {
    title: "Auditability & accountability",
    body: "Every critical action is logged, traceable, and reportable for inspection.",
  },
];

// Replace with real client feedback before launch.
export const testimonials = [
  {
    quote:
      "The platform handles our scheme end to end, and the team is reachable whenever we need them. Replace this with your real client quote.",
    name: "Project Lead",
    role: "Municipal GIS Programme (sample placeholder)",
  },
  {
    quote:
      "Delivery was on time and the system has been dependable since launch. Replace this with your real client quote.",
    name: "Department Head",
    role: "Government Organisation (sample placeholder)",
  },
];

export type Project = {
  slug: string;
  name: string;
  short: string;
  sector: string;
  summary: string;
  highlights: { label: string; value: string }[];
  features: string[];
};

// Add future projects by appending objects here — the listing page and
// detail pages update automatically.
export const projects: Project[] = [
  {
    slug: "government-insurance-scheme",
    name: "Government Insurance Scheme (GIS) Platform",
    short: "GIS Platform",
    sector: "Government · Insurance",
    summary:
      "Five city governments adopted our GIS platform to run their public insurance schemes end to end. Each deployment was custom built to that organisation, while sharing one secure, maintained core — so improvements reach every city.",
    highlights: [
      { label: "Cities deployed", value: "5" },
      { label: "Build type", value: "Custom" },
      { label: "Sector", value: "Government" },
    ],
    features: [
      "Beneficiary enrollment with identity verification (KYC)",
      "Policy and scheme management across multiple programmes",
      "Premium collection with integrated payment gateways",
      "Claims intake, review, and multi-level approval workflows",
      "Role-based access for officials, clerks, and administrators",
      "Document upload, verification, and secure storage",
      "Live dashboards and MIS reports for decision-makers",
      "Full audit trails and compliance logging",
      "Multi-city architecture from a single, shared codebase",
      "Automated SMS and email notifications",
      "Grievance and support module for citizens",
      "Government-grade data security and access control",
    ],
  },
];
````

## File: next.config.mjs
````javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows `next build` to succeed even if lint rules (e.g. unescaped
  // entities) flag something. Remove once you wire up your own CI linting.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
````

## File: package.json
````json
{
  "name": "nim-technology-solutions",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "gsap": "^3.15.0",
    "lucide-react": "^0.454.0",
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.169.0"
  },
  "devDependencies": {
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/three": "^0.169.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.5.4"
  }
}
````

## File: postcss.config.mjs
````javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
````

## File: README.md
````markdown
# NIM Technology Solutions — Website

Marketing website for **NIM Technology Solutions**, a software company building
custom systems for government bodies and private enterprises. Built with
**Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, with light 3D
and motion accents.

> **Tagline:** *Engineered for quality. Built around service.*

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | GSAP (scroll/entrance), CSS reveals |
| 3D | three.js (hero scene) |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (display) + Inter (body) via `next/font` |

---

## Getting started

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm run start   # production
npm run lint                     # lint
```

---

## Project structure

```
app/
  layout.tsx            Root layout — wraps every page with Navbar + Footer
  page.tsx              Home (hero + section previews)
  services/page.tsx     All services + how-we-work
  work/page.tsx         Project listing
  work/[slug]/page.tsx  Individual project detail (statically generated)
  industries/page.tsx   Sectors served
  about/page.tsx        Company, why us, tech, security, team, testimonials
  contact/page.tsx      Contact form + details
  not-found.tsx         404
  globals.css           Tailwind layers + design tokens/utilities

components/
  Navbar.tsx            Sticky header, scroll states, magnetic CTA, mobile menu
  Footer.tsx            Brand-gradient footer
  Logo.tsx              SVG wordmark (recolors for light/dark surfaces)
  Reveal.tsx            IntersectionObserver scroll-reveal wrapper
  ContactForm.tsx       Client form with a marked backend integration point
  GISDashboard.tsx      Illustrative mock of the GIS admin console
  home/Hero.tsx         Animated hero
  home/HeroScene.tsx    three.js wireframe + 5-city node ring
  ui/                   PageHeader, SectionHeading, CTABand

lib/
  data.ts               Single source of truth for all site content
```

Routing follows the App Router convention — each file under `app/` is a route.

---

## Editing content

All copy lives in **`lib/data.ts`** — `company`, `nav`, `stats`, `services`,
`industries`, `whyUs`, `process`, `technologies`, `commitments`, `testimonials`,
and `projects`. UI components read from these exports, so content can later be
swapped for a CMS/database without touching any component.

**Add a project:** append an object to the `projects` array in `lib/data.ts`.
The `/work` list and its `/work/[slug]` detail page are generated automatically —
no new files needed.

Other common edits:

- **Contact details** → `company` object in `lib/data.ts`
- **Brand colors** → `brand` scale in `tailwind.config.ts`
- **GIS visuals** → `components/GISDashboard.tsx` (replace mock with real screenshots in `public/`)
- **Testimonials** → currently sample placeholders; replace before launch

---

## Design system

- **Palette** derived from the logo blue (`brand-600 = #2C5DA8`), scaled 50–900,
  on white with soft tints — defined in `tailwind.config.ts`.
- **Smooth & rounded:** large corner radii (`rounded-4xl/5xl`), soft shadows,
  gentle gradients, and curved section transitions.
- **Reusable utilities** (`.shell`, `.eyebrow`, `.btn-*`, `.card`,
  `.brand-gradient`) defined in `app/globals.css`.

---

## Adding a backend

The contact form has a marked integration point in `components/ContactForm.tsx`.
Recommended path:

1. Create `app/api/contact/route.ts` (a Next.js Route Handler).
2. POST the form data to it; send an email or save to a database.
3. Replace the `console.log` block in `ContactForm.tsx` with a `fetch` call.

---

## Accessibility & notes

- Responsive from mobile to desktop, with visible keyboard focus states.
- `prefers-reduced-motion` is respected across GSAP, the 3D scene, and CSS reveals.
- `next.config.mjs` skips ESLint during builds for convenience — remove
  `eslint.ignoreDuringBuilds` once your own CI linting is set up.

---

## License

Proprietary — © NIM Technology Solutions. All rights reserved.
````

## File: tailwind.config.ts
````typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF5FC",
          100: "#DAE8F8",
          200: "#B7D0F0",
          300: "#8AB1E4",
          400: "#5C8DD6",
          500: "#3B72C2",
          600: "#2C5DA8", // matches the logo blue
          700: "#244C8A",
          800: "#1E3F70",
          900: "#1A3459",
        },
        ink: "#172033",
        muted: "#5C6B82",
        hairline: "#E4EAF2",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      maxWidth: {
        shell: "1180px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px -14px rgba(28, 58, 110, 0.20)",
        card: "0 6px 28px -12px rgba(28, 58, 110, 0.16)",
        lift: "0 24px 60px -28px rgba(28, 58, 110, 0.34)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: app/globals.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --shell-px: clamp(16px, 5vw, 44px);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  /* Stop any stray full-bleed element from creating a horizontal scrollbar
     on phones (decorative blur circles, wide grids, etc.). */
  html,
  body {
    overflow-x: hidden;
    width: 100%;
  }
  body {
    @apply bg-white text-ink font-sans antialiased;
    text-rendering: optimizeLegibility;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ::selection {
    background: theme("colors.brand.600");
    color: #fff;
  }
  :focus-visible {
    outline: 2px solid theme("colors.brand.500");
    outline-offset: 3px;
    border-radius: 6px;
  }
  h1, h2, h3 {
    @apply font-display tracking-tight;
  }
}

@layer components {
  .shell {
    @apply mx-auto w-full max-w-shell;
    padding-left: var(--shell-px);
    padding-right: var(--shell-px);
  }

  .eyebrow {
    @apply inline-flex items-center gap-2.5 text-xs font-700 uppercase tracking-[0.18em] text-brand-600;
  }
  .eyebrow::before {
    content: "";
    @apply h-1.5 w-1.5 rounded-full bg-brand-500;
  }
  .eyebrow-light {
    @apply text-brand-100;
  }
  .eyebrow-light::before {
    @apply bg-brand-200;
  }

  .btn {
    @apply inline-flex items-center justify-center gap-2 rounded-full text-[0.92rem] font-600 transition-all duration-200;
  }
  .btn-primary {
    @apply btn bg-brand-600 px-7 py-3.5 text-white shadow-soft hover:bg-brand-700 hover:shadow-lift;
  }
  .btn-soft {
    @apply btn border border-hairline bg-white px-7 py-3.5 text-ink hover:border-brand-200 hover:bg-brand-50;
  }
  .btn-ghost {
    @apply btn border border-white/35 px-7 py-3.5 text-white hover:bg-white hover:text-brand-700;
  }

  .card {
    @apply rounded-4xl border border-hairline bg-white shadow-card;
  }
}

@layer utilities {
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal.is-visible {
    opacity: 1;
    transform: none;
  }
  .brand-gradient {
    background-image: linear-gradient(135deg, #2C5DA8 0%, #244C8A 55%, #1E3F70 100%);
  }
  .soft-dots {
    background-image: radial-gradient(rgba(255, 255, 255, 0.16) 1.4px, transparent 1.4px);
    background-size: 26px 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .animate-float {
    animation: none !important;
  }
}
````

## File: components/GISDashboard.tsx
````typescript
export default function GISDashboard() {
  return (
    <div className="overflow-hidden rounded-4xl border border-hairline bg-white shadow-lift">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-hairline bg-brand-50 px-4 py-3.5 sm:px-5">
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#E0524A]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#E8B84A]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#3FA66A]" />
        <span className="ml-3 min-w-0 truncate text-[0.68rem] font-600 text-muted">
          gis.nim-platform · Beneficiary Console
        </span>
      </div>

      {/* On mobile this is a single column; the sidebar only appears from sm up.
          (Previously the hidden sidebar still reserved a 130px grid track, which
          crushed the main panel on phones.) */}
      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr]">
        {/* sidebar */}
        <aside className="hidden flex-col gap-1.5 bg-brand-700 p-4 sm:flex">
          <div className="mb-3 text-[0.62rem] font-700 uppercase tracking-[0.16em] text-brand-200">
            GIS · Admin
          </div>
          {["Dashboard", "Beneficiaries", "Policies", "Claims", "Payments", "Reports", "Audit Log"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 text-[0.74rem] font-500 ${
                  i === 0 ? "bg-white text-brand-700" : "text-brand-100"
                }`}
              >
                {item}
              </div>
            )
          )}
        </aside>

        {/* main */}
        <div className="bg-[#F7FAFE] p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate text-sm font-700 text-ink">Scheme Overview</div>
              <div className="truncate text-[0.66rem] text-muted">
                Buldhana District · FY 2025–26
              </div>
            </div>
            <div className="shrink-0 rounded-full bg-brand-600 px-3 py-1 text-[0.6rem] font-600 text-white">
              ● LIVE
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
            {[
              { k: "Beneficiaries", v: "48,210" },
              { k: "Active Policies", v: "39,884" },
              { k: "Claims (mo.)", v: "1,127" },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-hairline bg-white p-3">
                <div className="text-sm font-800 text-brand-700 sm:text-base">{c.v}</div>
                <div className="mt-0.5 text-[0.55rem] font-600 uppercase tracking-wide text-muted sm:text-[0.58rem]">
                  {c.k}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-hairline bg-white">
            <div className="grid grid-cols-[1fr_1fr_auto] gap-2 border-b border-hairline px-3 py-2.5 text-[0.58rem] font-700 uppercase tracking-wide text-muted sm:px-4">
              <span>Beneficiary</span>
              <span>Policy</span>
              <span>Status</span>
            </div>
            {[
              { n: "R. Pawar", p: "GIS-HEALTH", s: "Approved", ok: true },
              { n: "S. Deshmukh", p: "GIS-CROP", s: "In review", ok: false },
              { n: "A. Khan", p: "GIS-HEALTH", s: "Approved", ok: true },
            ].map((row) => (
              <div
                key={row.n}
                className="grid grid-cols-[1fr_1fr_auto] items-center gap-2 border-b border-hairline px-3 py-2.5 text-[0.72rem] text-ink last:border-0 sm:px-4"
              >
                <span className="truncate font-600">{row.n}</span>
                <span className="truncate text-[0.64rem] text-muted">{row.p}</span>
                <span
                  className={`whitespace-nowrap text-[0.6rem] font-600 ${
                    row.ok ? "text-[#2F8F57]" : "text-brand-500"
                  }`}
                >
                  ● {row.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: components/home/Hero.tsx
````typescript
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
````

## File: components/home/HeroScene.tsx
````typescript
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
````

## File: components/ui/CTABand.tsx
````typescript
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
````

## File: components/ui/PageHeader.tsx
````typescript
import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="relative overflow-hidden brand-gradient text-white">
      <div className="pointer-events-none absolute inset-0 soft-dots opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div className="shell relative pb-16 pt-28 sm:pb-24 sm:pt-40">
        <Reveal className="max-w-3xl">
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h1 className="mt-5 text-3xl font-800 leading-[1.1] [overflow-wrap:break-word] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
      {/* smooth curved base */}
      <div
        className="absolute inset-x-0 bottom-0 h-10 rounded-t-[2.5rem] bg-white"
        aria-hidden
      />
    </header>
  );
}
````
