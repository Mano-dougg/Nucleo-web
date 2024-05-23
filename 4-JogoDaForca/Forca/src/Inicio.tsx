import React from "react"
import Header from "./components/Header"
import {Link} from 'react-router-dom'

const Inicio: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Forca</h1>
                <div className="doisBotoes DB-home">
                    <Link to="/jogo">
                        <button className="botaozao botaoPrim">
                            Começar a jogar
                        </button>
                    </Link>
                    <Link to="/adicionar-palavras">
                        <button className="botaozao botaoSec">
                            Adicionar novas palavras
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Inicio