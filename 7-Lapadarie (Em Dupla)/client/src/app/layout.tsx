import type { Metadata } from 'next'
import "./globals.css";
import { poppins } from '@/src/app/ui/fonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: "La padarie",
  description: "Atividade 7 - núcleo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className={poppins.className}>

        <Header></Header>
        {children}
        <Footer></Footer>

      </body>

    </html>
  );

}

