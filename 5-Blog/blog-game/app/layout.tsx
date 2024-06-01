import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from '../prismicio';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

 
  return {
    title: page.data.site_title || "Blog Game Network",
    description: page.data.meta_description || "Blog Game Network é o site para você.",
    openGraph: {
      images: [page.data.og_image.url || "The Predator o jogo"],
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
        <header>Header!</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
