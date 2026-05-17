import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#08070a",
        iron: {
          900: "#0f0d0b",
          800: "#171410",
          700: "#221d17",
          600: "#2e2620",
          500: "#3d332b",
          400: "#5a4d40",
          300: "#7a6a58",
        },
        brass: {
          900: "#5a4012",
          800: "#7a591b",
          700: "#9b7224",
          600: "#b0892f",
          500: "#c89a3a",
          400: "#d8b260",
          300: "#e5c98c",
        },
        ember: {
          900: "#7a1d05",
          800: "#a82d0a",
          700: "#d44510",
          600: "#ff6a1a",
          500: "#ff8a3a",
          400: "#ffaa6a",
          300: "#ffc999",
        },
        steam: {
          900: "#3a342c",
          700: "#6b6354",
          500: "#9c937f",
          300: "#d4cab4",
          100: "#ede4d3",
          50: "#f6f0e3",
        },
        rust: "#8b3a13",
        coal: "#1a1614",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "Impact", "system-ui", "sans-serif"],
        serif: ['"Spectral"', "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        zh: ['"Noto Serif SC"', '"Source Han Serif SC"', "serif"],
      },
      boxShadow: {
        ember: "0 0 60px -10px rgba(255,106,26,0.55), 0 0 200px -40px rgba(255,138,58,0.35)",
        brass: "inset 0 0 0 1px rgba(200,154,58,0.35), 0 10px 40px -10px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "iron-grain":
          "radial-gradient(ellipse at 30% 20%, rgba(255,106,26,0.06), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(200,154,58,0.05), transparent 60%), linear-gradient(180deg, #08070a 0%, #0f0d0b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
