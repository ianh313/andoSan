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
        paper: {
          DEFAULT: "#F1E9D3",
          soft: "#F6EFD9",
          card: "#FAF3DF",
          edge: "#E1D4B0",
          line: "#D7C8A4",
        },
        ink: {
          DEFAULT: "#1B1612",
          soft: "#3A2E20",
          mute: "#6E6149",
          faint: "#9B8C6F",
        },
        amber: {
          soft: "#B58547",
          deep: "#8C6529",
          ember: "#67451B",
        },
        sage: {
          DEFAULT: "#7E8264",
        },
        burgundy: {
          DEFAULT: "#6F312D",
        },
        nocturne: {
          DEFAULT: "#1C1812",
          soft: "#2A231A",
        },
        fade: "#F0E5C9",
      },
      fontFamily: {
        serif: ['"EB Garamond"', '"Noto Serif TC"', "Georgia", "serif"],
        sans: ['"Inter"', '"Noto Sans TC"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.32em",
      },
      maxWidth: {
        prose2: "62ch",
      },
      keyframes: {
        slowfloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        slowfloat: "slowfloat 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
