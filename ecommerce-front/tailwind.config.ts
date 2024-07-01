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
        "bg-primary": "#F4FAF3",
        "bg-nav": "#3B8039",
        "bg-footer": "#3B8039",
        "bg-card": "#FFFFFF",
        "bg-filter": "#CBE8CAh",
        "text-primary": "#000000",
        "text-promo": "#E41212",
        "text-footer-title": "#FFFFFF",
        "text-footer": "#BEBEBE",
      },
    },
  },
  plugins: [],
};
export default config;
