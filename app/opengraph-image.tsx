import { ImageResponse } from "next/og";

// Branded social-share / Open Graph card, generated at request time.
// Next automatically wires this up as og:image (and Twitter falls back to it).
export const runtime = "edge";
export const alt = "NIM Technology Solutions — Software for Government & Enterprise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #2C5DA8 0%, #244C8A 55%, #1E3F70 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#B7D0F0",
            fontWeight: 700,
          }}
        >
          NIM Technology Solutions
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
            Software that serves
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#B7D0F0",
            }}
          >
            government and business.
          </div>
        </div>

        <div style={{ fontSize: 30, color: "#DAE8F8" }}>
          Engineered for quality. Built around service.
        </div>
      </div>
    ),
    { ...size }
  );
}