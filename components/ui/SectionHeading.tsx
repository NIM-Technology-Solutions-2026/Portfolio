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
