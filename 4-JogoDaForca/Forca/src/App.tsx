import { useState } from "react"

function App() {
  const [palavra, setPalavra] = useState("exemplo")
  const [chutes, setChutes] = useState<string[]>([])
  return (
    <body>
      
      <div className="resultado">Waow!😀☹️</div>
      {/*<DesenhoForca />
      <PalavraForca />
      <TecladoForca />*/}
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
