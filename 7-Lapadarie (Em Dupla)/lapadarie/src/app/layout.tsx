import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins( {weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lapadarie",
  description: "—Bom dia, o senhor tem pães? —Nães —Então tchães"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
