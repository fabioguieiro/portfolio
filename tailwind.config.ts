import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      fontFamily: {
        spicy: ["Spicy Rice", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
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
