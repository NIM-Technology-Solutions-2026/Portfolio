import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTABand({
  title = "Have a system in mind?",
  text = "Tell us what you need built. We will get back to you with a clear, honest plan.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl brand-gradient px-8 py-14 text-center text-white shadow-lift sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 soft-dots opacity-40" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-700 leading-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-lg text-brand-100">{text}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn bg-white px-8 py-4 text-brand-700 hover:bg-brand-50">
                  Start a project
                </Link>
                <Link href="/work" className="btn-ghost px-8 py-4">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
