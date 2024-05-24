import React from "react"
import Header from "./components/Header"
import {Link} from "react-router-dom"

const InputPalavras: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Digite uma palavra ou frase curta</h1>
                <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <input type="text" minLength={4} maxLength={10} className="input" />
                    <p>
                        Nota: <br />
                        Comprimento total deve ser entre 4 e 10.
                        <br />Acentos não serão registrados.
                    </p>
                </div>
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