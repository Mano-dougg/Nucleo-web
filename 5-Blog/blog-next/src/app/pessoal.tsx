import Footer from "./footer"
import Image from "next/image"
export default function Pessoal () {
    return(
        <main className="principal">
        <div className="header">
            <h1>
                AI
                <i>Today</i>
            </h1>
            <div className="container">
            <div className="entrada">
                <textarea className="pesquisar" placeholder=" Pesquisar" />
                <Image
                src="/lupa.svg"
                alt="lupa"
                width={32}
                height={32}
                />
            </div>
            <div className="luz">
                <button id="mudarmodo" onClick={alternarTema}>
                <Image
                    src="/light.svg"
                    alt="trocar modo"
                    width={32}
                    height={32}
                />
                </button>
            </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
    )
}