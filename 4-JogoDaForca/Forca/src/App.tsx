import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import DesenhoForca from "./components/DesenhoForca"
import PalavraForca from "./components/PalavraForca"
import TecladoForca from "./components/TecladoForca"

const App: React.FC = () => {
  const [palavra, setPalavra] = useState("exemplo")
  const [chutes, setChutes] = useState<string[]>([])
  const [erros, setErros] = useState(0);

  const maisErro = () => {
    setErros(errosAntes => (errosAntes < 6 ? errosAntes+1 : errosAntes));
  }
  const menosErro = () => {
    setErros(errosAntes => (errosAntes > 0 ? errosAntes-1 : errosAntes));
  }

  return (
    <>
      <Header />
      <main>
        <div className="resultado">Waow!😀☹️</div>
        <div className="desenho">
          <DesenhoForca erros={erros} />
        </div>
        <PalavraForca />
        <TecladoForca />
        <div className="doisBotoes">
          <button className="botaoPrim" onClick={menosErro}>
            Novo jogo - DEBUG: DIMINUI ERROS
          </button>
          <button className="botaoSec" onClick={maisErro}>
            Desistir - DEBUG: AUMENTA ERROS
          </button>
        </div>
      </main>
    </>
  )
}

export default App
