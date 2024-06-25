import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Modal from "@/components/Modal";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Lapadarie",
  description: "Atividade 7 - CRUD de Padaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Main />
        <Modal />
      </body>
    </html>
  );
}
