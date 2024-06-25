import type { Config } from 'tailwindcss';
import { Montserrat } from 'next/font/google';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        DEFAULT: `Montserrat`,
      },
      colors: {
        'primary1': '#1F3519',
        'primary2': '#588E22',
        'primary3': '#73FEB3',
        'tag1': '#FB3434',
        'tag2': '#34B3FB',
        'tag3': '#C6C146',
        'tag4': '#DF34FB',
      },
      spacing: {
        '88': '22rem',
        '130': '32.5rem',
        '1/7': '14.25%',
        '2/7': '28.5%',
        '4/7': '57%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
