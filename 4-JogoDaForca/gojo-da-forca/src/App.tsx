import './App.css'
import styled, { keyframes } from 'styled-components'
import Gojo from "./componentes/Gojo"
import Palavra from './componentes/Palavra'
import Alfabeto from './componentes/Alfabeto'
import palavras from './assets/listaDePalavras.json'
import laugh from './assets/sukuna-laugh.mp3'
import sokamono from './assets/sokamono.mp3'
import honored_one from "./assets/honored-one.mp3"
import domain_expansion from "./assets/domain-expansion.mp3"
import game_start from "./assets/Game Start.png"
import game_start2 from "./assets/Game Start 2.png"
import musica from "./assets/musica.mp3"
import { useCallback, useEffect, useState } from 'react'
import musica_vitoria from "./assets/tema-vitoria.mp3"

const Agregador = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

function escolherPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)]
}

function App() {
  const [palavraEscolhida, definirPalavraEscolhida] = useState('')
  const [letrasAdivinhadas, definirLetraAdivinhada] = useState<string[]>([])
  const [contadorKaisenVitoria, aumentaContadorKaisenVitoria] = useState(0)
  const [contadorKaisenDerrota, aumentaContadorKaisenDerrota] = useState(0)
  const [jogoIniciado, setJogoIniciado] = useState(false)
  const [gamestartKey, setGamestartKey] = useState(0)
  const [playingMusic, setPlayingMusic] = useState(true);

  const letrasIncorretas = letrasAdivinhadas.filter(
    (letra) => !palavraEscolhida.includes(letra)
  )

  const kaisenPerdida = letrasIncorretas.length >= 5
  const kaisenVencida = palavraEscolhida && palavraEscolhida.split("").every(letra=> letrasAdivinhadas.includes(letra))

  const adicionaLetraAdivinhada = useCallback((letra: string) => {
    if (!palavraEscolhida || letrasAdivinhadas.includes(letra) || kaisenPerdida || kaisenVencida) return

    definirLetraAdivinhada(letrasAtuais => [...letrasAtuais, letra])
  }, [letrasAdivinhadas, kaisenPerdida, kaisenVencida, palavraEscolhida])

  useEffect(() => {
    const handler = (e: eventoAlfabeto) => {
      const key = e.key

      if (!key.match(/^[a-ç]$/) || !jogoIniciado) return

      e.preventDefault()
      adicionaLetraAdivinhada(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [letrasAdivinhadas, jogoIniciado, adicionaLetraAdivinhada])
  
  useEffect(() => {
    const handler = (e: eventoAlfabeto) => {
      const key = e.key

      if (key !== "Enter" || !jogoIniciado) return

      e.preventDefault()
      definirLetraAdivinhada([])
      definirPalavraEscolhida(escolherPalavra())
      const audioElement = new Audio(domain_expansion);
      audioElement.play();
      setGamestartKey(prevKey => prevKey + 1);
      setPlayingMusic(true);
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [jogoIniciado, definirLetraAdivinhada])

  useEffect(() => {
    if (kaisenVencida) {
      aumentaContadorKaisenVitoria(prevCounter => prevCounter + 1)
      setPlayingMusic(false);
    }
  }, [kaisenVencida])

  useEffect(() => {
    if (kaisenPerdida) {
      aumentaContadorKaisenDerrota(prevCounter => prevCounter + 1)
    }
  }, [kaisenPerdida])

  const iniciarJogo = () => {
    setJogoIniciado(true)
    definirPalavraEscolhida(escolherPalavra())
    setPlayingMusic(true);
  }

  return (
    <Agregador className='App'>
      {!jogoIniciado && (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", width: "80%"}}>
          <p style={{textAlign: "center"}}>Gojo Goatoru está prestes a lutar contra o fraudekuna! <br>
            </br>Os dois irão expandir seus domínios, e cada milésimo de segundo conta. Ganha quem expandir seu domínio primeiro!<br>
            </br>O cérebro dele precisa associar todas as palavras relacionadas à Jujutsu.<br>
            </br>Assim, ele poderá lançar o Vazio Infinito antes da Cozinha Malevolente.<br>
            </br>Ajude-o, ou o nosso Gojo pode acabar ficando em pedaços...<br>
            </br>Dica: aperte "Enter" para resetar.
            </p>
          <button style={{width: "15rem", alignSelf: "center"}} onClick={iniciarJogo} onMouseEnter={() => { const audio = new Audio(sokamono); audio.play(); }}>Expansão de Domínio!</button>
        </div>
      )}
      
      {jogoIniciado && (
        <>
          <Gamestart key={gamestartKey} src={game_start}></Gamestart>
          <Gamestart2 key={gamestartKey} src={game_start2}></Gamestart2>
          <audio src={domain_expansion} autoPlay></audio>
          {kaisenPerdida && (<audio src={laugh} autoPlay></audio>)}
          {kaisenVencida && (<audio src={honored_one} autoPlay></audio>)}
          {kaisenVencida && (<audio src={musica_vitoria} autoPlay></audio>)}
          {playingMusic && (<audio src={musica} autoPlay loop={true}></audio>)}
          <h2>Vitórias {contadorKaisenVitoria} - Derrotas {contadorKaisenDerrota}</h2>
          <Gojo damageTaken={letrasIncorretas.length} kaisenVencida={kaisenVencida}/>
          <Palavra revela={kaisenPerdida} palavra={palavraEscolhida} letrasAdivinhadas={letrasAdivinhadas} />
          <Alfabeto disabled={kaisenVencida || kaisenPerdida}
          letraAtiva={letrasAdivinhadas.filter(letra => palavraEscolhida.includes(letra))} 
          letraInativa={letrasIncorretas}
          adicionaLetraAdivinhada={adicionaLetraAdivinhada}/>
        </>
      )}
    </Agregador>
  )
}

const esvaecer = keyframes`

    0% {
      left: -100%;
    }
    5% {
    left: 0;
  }
    50% {
    opacity: 1;
}
99% {
    opacity: 0;
    z-index: 0;
}

100% {
     opacity: 0;
     z-index: -1;
}
`

const Gamestart = styled.img`
  height: 100vh;
  width: 100%;
  animation: ${esvaecer} 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: fixed;
  bottom: 0;
`

const esvaecer2 = keyframes`
    0% {
      right: -100%;
    }
    5% {
    right: 0;
  }
    50% {
    opacity: 1;
    }
    99% {
        opacity: 0;
        z-index: 0;
    }

    100% {
        opacity: 0;
        z-index: -1;
    }
`

const Gamestart2 = styled.img`
  height: 100vh;
  width: 100%;
  animation: ${esvaecer2} 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: fixed;
  top: 0;
`

export default App
