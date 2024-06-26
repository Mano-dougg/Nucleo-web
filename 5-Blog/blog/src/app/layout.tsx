import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import TrueHeader from "@/components/true-header/true-header";
import ThemeStyle from "@/components/theme/theme";
import { ThemeProvider } from "@/context/theme-context";


config.autoAddCss = false

const inter = Inter({ subsets: ["latin"],
                      variable: '--font-inter',
                    display: 'swap' });
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
    <ThemeProvider>
      <ThemeStyle />
      <body className={clsx(inter.variable)+" text-font"}>
        <TrueHeader />
        <main className="min-h-screen bg-background-2 pb-11">{children}</main>
        <Footer />
      </body>
    </ThemeProvider>  
    </html>
  );
}
