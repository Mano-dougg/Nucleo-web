import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import DesenhoForca from "./components/DesenhoForca"
import PalavraForca from "./components/PalavraForca"
import TecladoForca from "./components/TecladoForca"

const App: React.FC = () => {
  const [palavra, setPalavra] = useState("exemplo")
  const [chutes, setChutes] = useState<string[]>([])
  const chutesErrados = chutes.filter(letra => !palavra.includes(letra))

  return (
    <>
      <Header />
      <main>
        <div className="resultado">Waow!😀☹️</div>
        <div className="desenho">
          <DesenhoForca erros={chutesErrados.length < 6 ? chutesErrados.length : 6} />
        </div>
        <PalavraForca chutes={chutes} palavra={palavra} />
        <TecladoForca />
        <div className="doisBotoes">
          <button className="botaozao botaoPrim">
            Novo jogo
          </button>
          <button className="botaozao botaoSec">
            Desistir
          </button>
        </div>
      </main>
    </>
  )
}

export default App
