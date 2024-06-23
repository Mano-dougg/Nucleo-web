import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { SelectedMovieProvider } from "@/context/SelectedMovieContext";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieDB",
  description: "The movie database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={comfortaa.className}>

      <SelectedMovieProvider>
        <Header/>
        {children}
      </SelectedMovieProvider>
      
      </body>
      
    </html>
  );
}




// import type { Metadata } from "next";
// import { Comfortaa } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

// const comfortaa = Comfortaa({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MovieDB",
//   description: "The movie database",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
      
//       <body className={comfortaa.className}>

//         <Header/>
//         {children}
//         {/* <Footer/> */}
        
//       </body>
      
//     </html>
//   );
// }
