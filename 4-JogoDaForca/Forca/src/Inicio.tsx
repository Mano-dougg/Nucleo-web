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
                    <Link to="/adicionar-palavras">
                        <button className="botaozao botaoPrim">
                            Começar jogo
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Inicio