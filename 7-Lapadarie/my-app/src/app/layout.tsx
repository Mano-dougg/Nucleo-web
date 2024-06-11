'use client';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Headers from "@/components/headers";
import { useState } from "react";


export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600','700']
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt_BR">
      <body className={`${poppins.variable}`}>
        <Headers/>
        {children}
      </body>
    </html>
  );
}
