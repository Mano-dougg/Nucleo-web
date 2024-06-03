import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {

 const client = createClient();

 const page = await client.getSingle("settings")


  return {
    title: page.data.site_title || "i'm sorry, we're out",
    description: page.data.meta_description || "promise we'll be back soon",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body >
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
