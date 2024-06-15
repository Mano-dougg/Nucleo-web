import type { Metadata } from "next";
import { Inter, Black_Ops_One } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400"
});

/* export const metadata: Metadata = {
  title: "Home",
  icons: {
    icon: "/favicon.png",
  },
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
