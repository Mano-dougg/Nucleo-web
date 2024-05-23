import { useState, useEffect, useCallback } from "react"
import React from "react"
import Header from "./components/Header"
import DesenhoForca from "./components/DesenhoForca"
import PalavraForca from "./components/PalavraForca"
import TecladoForca from "./components/TecladoForca"

type AppProps = {
  palavra: string;
}

const App: React.FC<AppProps> = ({palavra}) => {
  const [chutes, setChutes] = useState<string[]>([])
  const chutesErrados = chutes.filter(letra => !palavra.includes(letra))
  
  const perdeu = chutesErrados.length >= 6
  const ganhou = palavra.split("").every(letra => chutes.includes(letra))

  const adicionaChute = useCallback(
    (tecla: string) => {
      if(chutes.includes(tecla) || ganhou || perdeu) return
      setChutes(chutesAntes => [...chutesAntes, tecla])
  }, [chutes, ganhou, perdeu])
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tecla = e.key
      if (!tecla.match(/^[a-zç]$/)) return
      e.preventDefault()
      adicionaChute(tecla)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [chutes])

  const desiste = () => {
    const valoresLixo = ["@", "#", "$", "%", "*", "?"]
    valoresLixo.forEach(lixo => adicionaChute(lixo))
  }

  return (
    <>
      <Header />
      <main>
        <div className="resultado">
          {ganhou && "Muito bem! Você acertou 😀"
          || perdeu && `Fim do jogo ☹️ A palavra era ${palavra.toUpperCase()}`
          || "ㅤ"}
        </div>
        <div className="desenho">
          <DesenhoForca erros={chutesErrados.length < 6 ? chutesErrados.length : 6} />
        </div>
        <PalavraForca chutes={chutes} palavra={palavra} />
        <TecladoForca
          desativa={ganhou||perdeu}
          letrasCorretas={chutes.filter(l => palavra.includes(l))}
          letrasIncorretas={chutesErrados}
          adicionaChute={adicionaChute}
        />
        <div className="doisBotoes">
          <button className="botaozao botaoPrim">
            Novo jogo
          </button>
          <button className="botaozao botaoSec" onClick={desiste}>
            Desistir
          </button>
        </div>
      </main>
    </>
  )
}

export default App
