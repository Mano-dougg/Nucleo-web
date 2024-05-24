import './App.css'
import JogoForcaDesenho from './componentes/jogoForcaDesenho'
import JogoForcaPalavra from './componentes/jogoForcaPalavra'
import JogoForcaTeclado from './componentes/jogoForcaTeclado'
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';




const Forca = () => {
  
  const location = useLocation();
  const { palavra } = location.state || {};
  const word = palavra;

  const [wordToGuess] = useState(() =>{
    return word
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const correctGuesses = guessedLetters.filter(
    (letter) => wordToGuess.includes(letter)
  )
  
  const loser = incorrectGuesses.length >=6;
  const winner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback((letter:string) =>{
    if(guessedLetters.includes(letter) ||loser || winner) return

    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])

  }, [guessedLetters, loser, winner])
 

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener

    document.addEventListener('keypress', handler)

    return(() => {
      document.removeEventListener('keypress', handler)
    })

  }, [guessedLetters])
    

  return (
      <div className='App'>
        <div className="respostas">
        {loser && <h4>Que pena, você perdeu... <br/>Mas não fique triste! Clique no botão Jogar Novamente e tente outra vez :)</h4>}
        {winner && <h4> &#127881; Parabéns! Você venceu! &#127881; <br/>Fique a vontade para escolher outra palavra! <br/>Clique no botão Jogar Novamente e tente outra vez :) </h4>}
        
        </div>

        <JogoForcaDesenho 
        numberOfGuesses={incorrectGuesses.length}/>
        
        <JogoForcaPalavra 
        reveal={loser} 
        guessedLetters={guessedLetters} 
        word={wordToGuess} />

        <JogoForcaTeclado 
        disabled ={loser || winner}
        activeLetter={correctGuesses}
        inactiveLetters={incorrectGuesses}
        />

      <div className='go_home'>
        <a className="btn_home" href="/">Jogar Novamente</a>
      </div>  
      </div>
  )
}

export default Forca
