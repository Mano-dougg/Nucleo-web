import { useState, useEffect, useCallback } from "react"
import React from "react"
import Header from "./components/Header"
import DesenhoForca from "./components/DesenhoForca"
import PalavraForca from "./components/PalavraForca"
import TecladoForca from "./components/TecladoForca"
import { usaApp } from "./components/context"
import { Link } from "react-router-dom"

const App: React.FC = () => {
  const {palavra, vitorias, setVitorias, derrotas, setDerrotas} = usaApp();
  const [chutes, setChutes] = useState<string[]>([" "])
  const chutesErrados = chutes.filter(letra => !palavra.includes(letra) && letra !== " ")
  
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

  useEffect(()=>{
    if (ganhou) setVitorias(antes => antes + 1)
    if (perdeu) setDerrotas(antes => antes + 1)
  }, [ganhou, perdeu, setVitorias, setDerrotas])

  return (
    <>
      <Header />
      <main>
        <div style={{display:"flex",flexDirection:"column", gap: "20px"}}>
          Placar:
          <h2>
            <span style={{color:'#04b704'}}>{vitorias}</span>
            /
            <span style={{color:"red"}}>{derrotas}</span>
          </h2>
        </div>
        <div className="resultado">
          {ganhou && "Muito bem! Você acertou 😀"
          || perdeu && `Fim do jogo ☹️ Você perdeu`
          || "ㅤ"}
        </div>
        <div className="desenho">
          <DesenhoForca erros={chutesErrados.length < 6 ? chutesErrados.length : 6} />
        </div>
        <PalavraForca chutes={chutes} palavra={palavra} perdeu={perdeu} />
        <TecladoForca
          desativa={ganhou||perdeu}
          letrasCorretas={chutes.filter(l => palavra.includes(l))}
          letrasIncorretas={chutesErrados}
          adicionaChute={adicionaChute}
        />
        <div className="doisBotoes">
          <Link to="/adicionar-palavras">
            <button className="botaozao botaoPrim">
              Novo jogo
            </button>
          </Link>
          <button className="botaozao botaoSec" onClick={desiste}>
            Desistir
          </button>
        </div>
      </main>
    </>
  )
}

export default App
