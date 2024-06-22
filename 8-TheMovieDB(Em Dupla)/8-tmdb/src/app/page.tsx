import Image from "next/image";
import "./globals.css";
import NavBar from "./components/navBar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link className="goHome" href="/"><h1>TRIO</h1></Link>
      </nav>

      <div className="main">
        <div className="destaque">
            Acesse. Descubra. Assista.
        </div>

        <div className="chamada">
          <p>Bem-vindo ao <span className="Trio">Trio</span>!<br/>
          Acesse e você descobrirá o melhor que o streaming pode oferecer, cadastre-se e assista! <br/>
          Pronto para mergulhar em uma nova aventura?
          </p>
        </div>

        <div className="btnPrincipal">
          <Link className="acessaSignUp" href="/signUp">Sign UP</Link>
          <Link className="acessaLogIn" href="/logIn">Login</Link>
        </div>
      </div>
      
    </main>
  );
}
