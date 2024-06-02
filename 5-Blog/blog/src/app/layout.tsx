import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";

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

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise",
    description:
      settings.data.meta_description || "Flowrise is the relaxing app for you.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-lime-200 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
