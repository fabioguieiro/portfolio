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
        cream: "#F3F1E8",
        black: "#000000",
        tomato: "#F66333",
        rose: "#F8A9AD",
        petroleum: "#1B81C4",
        lightBlue: "#B0D9E6",
        turquoise: "#90d5d0",
        //dark mode
        royal: "#132A3F",
        gold: "#C4B274",
        brownie: "#9C5D38",
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
