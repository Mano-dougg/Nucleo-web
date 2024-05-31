import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/styles/globals.css"
import "@/app/styles/header.css"
import "@/app/styles/footer.css"
import "@/app/styles/navigation.css"
import "@/app/styles/page.css"
import "@/app/styles/card.css"
import "@/app/styles/tag.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game Network",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={montSerrat.className}>
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
