import { Inter, Montserrat } from 'next/font/google'
import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Generated by create next app",
};
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Blog",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,

// }: Readonly<{

//   children: React.ReactNode;

// }>) {

//   return (

//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );

// }
