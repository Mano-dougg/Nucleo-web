import { useState } from "react"
import React from "react"
import Header from "./components/Header"

const Inicio: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <div className="doisBotoes DB-home">
                    <button className="botaozao botaoPrim">
                        Começar a jogar
                    </button>
                    <button className="botaozao botaoSec">
                        Adicionar nova palavra
                    </button>
                </div>
            </main>
        </>
    )
}

export default Inicio