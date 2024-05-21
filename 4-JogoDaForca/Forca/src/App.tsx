import { useState } from "react"
import Header from "./components/Header"
import DesenhoForca from "./components/DesenhoForca"
import PalavraForca from "./components/PalavraForca"
import TecladoForca from "./components/TecladoForca"

function App() {
  const [palavra, setPalavra] = useState("exemplo")
  const [chutes, setChutes] = useState<string[]>([])
  return (
    <body>
      <Header />
      <div className="resultado">Waow!😀☹️</div>
      <DesenhoForca />
      <PalavraForca />
      <TecladoForca />
      <div className="doisBotoes">
        <button className="botaoPrim">
          Novo jogo
        </button>
        <button className="botaoSec">
          Desistir
        </button>
      </div>
    </body>
  )
}

export default App
