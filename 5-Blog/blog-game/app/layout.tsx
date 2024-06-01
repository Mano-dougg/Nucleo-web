import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from '../prismicio';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
