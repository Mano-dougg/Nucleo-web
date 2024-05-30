import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "../app/css/globals.css";
import { Inter, Montserrat} from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className={`${inter.variable} ${montserrat.variable} `}>
      <body className="bg-[#283044]">
        <Header/>
        <Footer/>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}


