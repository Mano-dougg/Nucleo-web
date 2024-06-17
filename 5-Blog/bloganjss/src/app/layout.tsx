import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import favicon from './book.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <head>
        <link rel="icon" href={favicon.src} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Courgette&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
      </head>
    
      <body className={inter.className}>{children}</body>

    </html>
  );
}
