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
