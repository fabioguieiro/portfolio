import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/images/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* mode-dependent: defined in globals.css, swapped by .dark */
        ground: "rgb(var(--ground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surfaceAlt: "rgb(var(--surface-alt) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        inkMuted: "rgb(var(--ink-muted) / <alpha-value>)",
        outline: "rgb(var(--outline) / <alpha-value>)",
        display: "rgb(var(--display) / <alpha-value>)",

        /* fields: identical in both modes, always paired with fieldInk */
        fieldInk: "#14110E",
        tomato: "#F66333",
        mint: "#7FCCC6",
        sky: "#A8D5E5",
        rose: "#F5A3A8",
        sun: "#FBCB3C",
        grape: "#C08BF5",
        indigo: "#4F46E5",
        tomatoDeep: "#DD4E1C",
        paper: "#FFFBF0",
        cream: "#F3F1E8",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        hand: ["Caveat", "cursive"],
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Lilita One", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
