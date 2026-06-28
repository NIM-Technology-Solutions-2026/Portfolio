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