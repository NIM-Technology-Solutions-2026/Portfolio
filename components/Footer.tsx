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