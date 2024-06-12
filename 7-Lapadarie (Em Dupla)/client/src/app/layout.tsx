import type { Metadata } from 'next'
import "./globals.css";
import { poppins } from '@/src/app/ui/fonts';
import Header from './components/Header/Header';

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


      </body>

    </html>
  );

}

// import Header from "@/components/header/Header";
// import Footer from '@/components/footer/Footer';
 
// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })
 
// const montserrat = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-montserrat',
//   display: 'swap',
// })
