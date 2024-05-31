import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "../app/css/globals.css";
import { Inter, Montserrat} from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import CardSlicer from "@/components/cardslicer";
import MoviesList from "@/components/terror";


 
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
      <body className="bg-[#283044] flex flex-col min-h-screen">
        <Header/>
        
        <main className="flex-grow main-bg z h-1/3">
          <CardSlicer/>
        </main>
        <MoviesList/>
        <Footer/>

        
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}


