import Image from "next/image";
import "./globals.css"
import HeaderLogo from "./components/headerLogo";
import Footer from "./components/footer";
import Transicoes from "./components/transicoes";

export default function Home() {
  return (
    <main>
      <header>
        <HeaderLogo/>
      </header>

      <div className="transactions">
        <Transicoes/>
      </div>

      <footer>
        <Footer/>
      </footer>
    
    </main>
  );
}
