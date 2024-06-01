import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-inter)"]
      },
      backgroundColor: {
        header: "var(--header-bg)",
      },
      colors: {
        "font": "var(--font)",
        "font-2": "var(--font2)",
        "logo-2": "var(--logo-color2)",
        "background-1": "var(--background1)",
        "background-2": "var(--background2)",
        "background-3": "var(--background3)",
        "D&D": "var(--DnD)",
        "Tormenta": "var(--tormenta)",
        "VTM": "var(--vtm)",
        "Homebrew": "var(--homebrew)"

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "1/20": "5%",
        "1/10": "10%",
        "22": "5.5rem",
        "50": "12.5rem"
      }
    },
  },
  plugins: [],
};
export default config;
