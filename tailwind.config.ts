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
