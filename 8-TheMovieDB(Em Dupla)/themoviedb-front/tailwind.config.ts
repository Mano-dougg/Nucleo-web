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
        'primary-color': "#ffffff",
        "primary-border": "#64748B",
        "btn-bg": "#020617",
        "dark-bg": "#09090B",
        "dark-border": "#3F3F46",
        "dark-btn-bg": "#FAFAFA"
      }
    },
  },
  plugins: [],
};
export default config;
