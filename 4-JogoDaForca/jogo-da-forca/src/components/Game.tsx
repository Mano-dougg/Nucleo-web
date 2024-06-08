import { useState } from 'react'
import {Zero, One, Two, Three, Four, Five, Six} from '../assets/images/index.ts'
import Word from './Word.tsx'

export default function Game() {
  const [index, setIndex] = useState<number>(0)
  const [startGame, setStartGame] = useState<boolean>(false)
  const [lettersArray, setLettersArray] = useState([])
  const [wrongArray, setWrongArray] = useState([])
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [gameLost, setGameLost] = useState<boolean>(false)
  const [wonNumber, setWonNumber] = useState<number>(0)
  const [lostNumber, setLostNumber] = useState<number>(0)
  const imagesArray = [Zero, One, Two, Three, Four, Five, Six]

  const words = [
  "lento",
  "vento",
  "raquete",
  "segurança",
  "sol",
  "nuvem",
  "tempo",
  "tempestade",
  "furacão",
  "bode",
  "cachorro",
  "gato",
  "cavalo",
  "presidente",
  "vaca",
  "folha",
  "explosão",
  "sapato",
  "placas",
  "crocodilo"
  ]

  const [word, setWord] = useState<string>("")

  const handleStart = () => {
    setWord(words[Math.floor(Math.random() * 20)])
    setStartGame(true)
  }

  const startAgain = () => {
    setIndex(0)
    setStartGame(false)
    setLettersArray([])
    setWrongArray([])
    setGameWon(false)
    setGameLost(false)
    setWord("")
  }

  const handleSubmit = () => {
    const input = document.querySelector("input")
    const array = []
    const newArray = [...wrongArray]
    for (let i = 0; i < word.length; i++) {
      const letter = word.charAt(i)
      if (lettersArray.length == 0) {
        if (input.value == letter) {
          array.push(letter)
        } else {
          array.push(" ")
        }
      } else {
        if (input.value == letter || lettersArray[i] != " ") {
          array.push(letter)
        } else {
          array.push(" ")
        }
      }
    }
    if (array.join("") == word) {
      setGameWon(true)
      setWonNumber(wonNumber + 1)
    }

    if (!word.includes(input.value)) {
      const wrong = input.value
      newArray.push(wrong)

      if (index == 5) {
        setGameLost(true)
        setLostNumber(lostNumber + 1)
      }
      const newIndex = index + 1
      setIndex(newIndex) 
    }

    setLettersArray(array)
    setWrongArray(newArray)

    input.value = ""
  }


  if (startGame && !gameLost && !gameWon) {
    return(
      <>
        <h1>Jogo em Andamento</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <form onSubmit={ e => { 
            e.preventDefault()
            handleSubmit()
            }
          }>
            <input type="text" maxLength="1" name="letter" className="myInput"/>
          </form>

          <Word lettersArray={lettersArray} />

          <div className="wrong-container">
            <Word lettersArray={wrongArray} />
          </div>
        </div>
      </>
    )
  }
  if (gameWon) {
    return(
      <>
        <h1>Você Ganhou</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <button className="myInputAgain" onClick={startAgain}>
            Jogar Novamente
          </button>
          <Word lettersArray={lettersArray} />
        </div>
        <p>Partidas ganhas: {wonNumber}</p>
        <p>Partidas perdidas: {lostNumber}</p>
      </>
    )
  }
  if (gameLost) {
    return(
      <>
        <h1>Você Perdeu</h1>
        <img src={imagesArray[index]} alt="hangman"/>
        <div className="card">
          <button className="myInputAgain" onClick={startAgain}>
            Jogar Novamente
          </button>
          <Word lettersArray={lettersArray} />
        </div>

        <p>Palavra certa: {word}</p>
        <p>Partidas ganhas: {wonNumber}</p>
        <p>Partidas perdidas: {lostNumber}</p>
        
      </>
    )
  }


  return(
    <>
      <h1>Jogo da Forca</h1>
      <img src={imagesArray[index]} alt="hangman"/>
      <div className="card">
        <button className="myInput" onClick={handleStart}>
          Jogar
        </button>
      </div>
      <p>Partidas ganhas: {wonNumber}</p>
      <p>Partidas perdidas: {lostNumber}</p>
    </>
  )
  
}
