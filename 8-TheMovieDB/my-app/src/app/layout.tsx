import type { Metadata } from "next";
import { Poppins, Montserrat, Josefin_Sans, DM_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['400', '500', '700']
});

const dmsans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm',
  weight: ['200', '300','400', '500', '700']
});

export const metadata: Metadata = {
  title: "RianFlix.",
  description: "O melhor site de streaming que você conhece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${montserrat.variable} ${josefin.variable} ${dmsans.variable}`}>{children}</body>
    </html>
  );
}
