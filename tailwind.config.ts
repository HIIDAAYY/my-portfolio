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
        // Latar
        ink: {
          DEFAULT: "#0B0813", // background utama
          800: "#100C1B", // section alternatif
          700: "#141026", // permukaan kartu
          600: "#1B1530", // permukaan kartu hover
        },
        // Aksen
        violet: {
          DEFAULT: "#8B5CF6",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        magenta: {
          DEFAULT: "#D946EF",
          400: "#E879F9",
          500: "#D946EF",
          600: "#C026D3",
        },
        // Teks
        paper: "#F8FAFC",
        muted: "#94A3B8",
        // Garis
        hairline: "rgba(139, 92, 246, 0.14)",
        "hairline-strong": "rgba(139, 92, 246, 0.28)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        // Skala tipografi besar, clamp agar responsif tanpa breakpoint
        display: ["clamp(2.5rem, 7vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        h1: ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.035em" }],
        h2: ["clamp(1.5rem, 3.5vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        h3: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        lead: ["clamp(1rem, 1.6vw, 1.1875rem)", { lineHeight: "1.7" }],
      },
      maxWidth: {
        shell: "76rem",
      },
      backgroundImage: {
        "violet-sheen":
          "linear-gradient(135deg, rgba(139,92,246,0.16) 0%, rgba(217,70,239,0.10) 50%, transparent 100%)",
        "hairline-gradient":
          "linear-gradient(120deg, rgba(139,92,246,0.55), rgba(217,70,239,0.35), rgba(139,92,246,0.05))",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.18), 0 18px 60px -20px rgba(139,92,246,0.45)",
        "glow-strong":
          "0 0 0 1px rgba(139,92,246,0.32), 0 26px 90px -24px rgba(217,70,239,0.55)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.92)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-160% 0" },
          "100%": { backgroundPosition: "260% 0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0,18px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2.6s linear infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        snap: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
