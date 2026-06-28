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
      <div className="shell relative pb-20 pt-36 sm:pb-24 sm:pt-40">
        <Reveal className="max-w-3xl">
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-800 leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">
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
