import styled from "styled-components"
import zoom from "../assets/zoom.mp3"
import { useEffect } from "react"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 5vw;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 20px;
`

interface palavraProps {
  palavra: string
  letrasAdivinhadas: string[]
  revela?: boolean
}

export default function Palavra({palavra, letrasAdivinhadas, revela = false}: palavraProps) {  
  useEffect(() => {
    const audio = new Audio(zoom);
    const lastGuessedLetter = letrasAdivinhadas[letrasAdivinhadas.length - 1];
    if (lastGuessedLetter && palavra.includes(lastGuessedLetter)) {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
      audio.play();
    }
  }, [letrasAdivinhadas, palavra]);

  return (
    <Wrapper>
    {palavra.split("").map((letra, index) => 
      <span style={{ borderBottom: "0.1em solid", width: '4vw'}} key={index}>
    <span style={{ visibility: letrasAdivinhadas.includes(letra) || revela ? 'visible' :'hidden', color: !letrasAdivinhadas.includes(letra) && revela ? "red" : ""}}>{letra}</span>
    </span>
      )}
    </Wrapper>
  )
}
