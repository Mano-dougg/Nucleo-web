//-- GERAL
import clsx from "clsx";
import { createClient } from "@/prismicio";
//-- COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//-- STYLE
import { montserrat } from '@/app/ui/fonts';
import '@/app/ui/globals.css';


//-- META
import type { Metadata, ResolvingMetadata } from 'next'
import { PrismicPreview } from "@prismicio/next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle('settings')

 
  return {
    title: settings.data.titulo_blog || "Game Network",
    description: settings.data.meta_description || "O GameNetwork é um blog de conteúdo e novidades sobre jogos, filmes e séries",
    openGraph: {
      images: [""],
    },
  }
}
 
// export default function Page({ params, searchParams }: Props) {}


// MAIN FUNCTION
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body className={montserrat.className}>
        <Header />
        
        {children}
        {/* <PrismicPreview repositoryName={repositoryName} /> */}

        <Footer />
      </body>
      
    </html>
  );
}
