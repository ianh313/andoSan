import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0908",
          deep: "#06060A",
          char: "#16130F",
          warm: "#1F1A14",
        },
        cream: {
          DEFAULT: "#EFE7D6",
          dim: "#C9BFA9",
          mute: "#8E8470",
        },
        amber: {
          soft: "#C9A86A",
          dim: "#A88753",
          ember: "#7E5E33",
        },
        olive: {
          dusty: "#5E5A45",
        },
        burgundy: {
          low: "#5C2E2C",
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', '"Cormorant Garamond"', '"Noto Serif TC"', "Georgia", "serif"],
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
          "50%": { transform: "translateY(-8px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-1%)" },
          "20%": { transform: "translate(1%,2%)" },
          "30%": { transform: "translate(-1%,1%)" },
          "40%": { transform: "translate(2%,-2%)" },
          "50%": { transform: "translate(-2%,2%)" },
          "60%": { transform: "translate(1%,-1%)" },
          "70%": { transform: "translate(-1%,-2%)" },
          "80%": { transform: "translate(2%,1%)" },
          "90%": { transform: "translate(-2%,2%)" },
        },
        emberpulse: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        slowfloat: "slowfloat 9s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
        emberpulse: "emberpulse 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
