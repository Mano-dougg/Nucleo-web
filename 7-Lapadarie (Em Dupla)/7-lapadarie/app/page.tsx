import Image from "next/image";
import "./globals.css"
import HeaderLogo from "./components/headerLogo";
import Footer from "./components/footer";
import Transicoes from "./components/transicoes";
import ModalButton from "./components/modalButton";

export default function Home() {
  return (
    <main>
      <header>
        <HeaderLogo/>
      </header>

      <div className="transactions">
        <Transicoes/>
      </div>

      {/* modal */}
      <div>
        <ModalButton />
      </div>


    {/* implementar table */}
      <div className="tabela">
        <div>

        </div>
      </div>

      <footer>
        <Footer/>
      </footer>
    
    </main>
  );
}
