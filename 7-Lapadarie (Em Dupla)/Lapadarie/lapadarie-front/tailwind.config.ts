import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pbrown: '#5F3305',
        plightbrown: '#965A1B',
        pbeige: '#E5CF94',
        pred: '#DB1E1E',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'transactions3': 'minmax(230px, 395px) minmax(230px, 395px) minmax(230px, 395px)',
        'transactions2': 'minmax(230px, 395px) minmax(230px, 395px)',
        'transactions1': 'minmax(230px, 395px)',
      }
    },
  },
  plugins: [],
};
export default config;
