import Footer from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/NavBar/NavBar";
import "@/styles/style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
