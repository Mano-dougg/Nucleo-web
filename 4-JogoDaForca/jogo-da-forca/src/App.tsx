import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import Keyboard from './components/keyboard'
import HangmanWord from './components/hangmanword'
import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 2rem;
`

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 375px;
`

const words = ['python', 'java', 'javascript']

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })


  
  const [guessedLetters, setGuessedLetters] = useState <string []>([])
  const incorrectGuesses = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  return (
    <Wrapper>
      <HangmanPart>
        <h2>Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord guessedLetters={guessedLetters} word={wordToGuess}/>
      </HangmanPart>
      <Keyboard/>
    </Wrapper>
  )
}

export default App
