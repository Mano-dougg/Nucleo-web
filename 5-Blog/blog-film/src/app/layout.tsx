
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "../app/css/globals.css";
//Fontes
import { Inter, Montserrat} from 'next/font/google'
 
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
    <html lang="en">
      <body className="">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
