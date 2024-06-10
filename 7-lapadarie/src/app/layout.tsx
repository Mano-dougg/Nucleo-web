import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "@/app/styles/globals.css"
import "@/app/styles/page.css"
import "@/app/styles/header.css"
import "@/app/styles/queue.css"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "LaPadarie",
  description: "A sua padaria favorita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
