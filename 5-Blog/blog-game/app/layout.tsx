import type { Metadata } from 'next'
import { Inter, Montserrat } from "next/font/google";
import clsx from 'clsx';
import "./globals.css";
import { createClient } from '../prismicio';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monstserrat',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

 
  return {
    title: settings.data.site_title || "Blog Game Network",
    description: settings.data.meta_description || "Blog Game Network é o site para você.",
    openGraph: {
      images: [settings.data.og_image.url || "The Predator o jogo"],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className, montserrat.className)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
