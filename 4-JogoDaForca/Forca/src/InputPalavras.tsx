import React from "react"
import Header from "./components/Header"
import {Link} from "react-router-dom"

const InputPalavras: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Digite uma palavra ou frase</h1>
                <textarea className="input" />
                <p>Nota: <br />
                    Apenas palavras de comprimento entre 4 e 10 serão registradas.
                    <br />Acentos não serão registrados.</p>
                <div className="doisBotoes">
                    <button className="botaozao botaoPrim">
                        Salvar e começar
                    </button>
                    <Link to="/">
                        <button className="botaozao botaoSec">
                            Cancelar
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}
export default InputPalavras