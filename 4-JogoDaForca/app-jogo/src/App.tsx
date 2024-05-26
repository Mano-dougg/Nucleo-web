import Navbar from "./assets/Header/Navbar"
import BlueButton from "./assets/Content/Blue-Button/BlueButton"
import WhiteButton from "./assets/Content/White-Button/WhiteButton"
import HangmanDraw from "./assets/Content/HagmanDraw/HangmanDraw"
import HangmanWord from "./assets/Content/HagmanWord/HangmanWord"
import './App.css'
import { useCallback, useEffect, useState } from "react"
import icon from './../public/exclamation-sign.png'

function App() {
  // Stuff to track
  const [words_to_guess,setWTG] = useState<string>('Digite uma Palavra - apenas minusculas')
  const [guessedLetters, setGLT] = useState<string[]>([])
  const incorrectGuesses:string[] = guessedLetters.filter(letter => !words_to_guess.includes(letter)) 
  const [wincount,setWC] = useState<number>(0)
  const [losecount,setLC] = useState<number>(0)
  const [loadInput,setLI] = useState<boolean>(false)
  const [loadGame,setLG] = useState<boolean>(false)
  const isLoser:boolean = (incorrectGuesses.length >= 6) && (loadGame == true) && (loadInput == false)
  const isWin:boolean = (words_to_guess.split('').every(letter => guessedLetters.includes(letter))) && (loadGame == true) && (loadInput == false)
  // Function to handle Game
  function handleGame() {
      if(loadGame == false){
        return setLG(true), setLI(false)
      }
        return setLG(false),setWTG('')
  }
  // Function to handle the Input
  function handleInput() {
      if(loadInput == false){
        return setLG(false), setLI(true)
      }
        return setLI(false),setWTG('')
  }

  // Parents Logic - Add Guess Letter
  const addGuessLetter = useCallback((letter:string)=> {
    function trackCounters() {
      if(isLoser == true && isWin == false) {
        const newvalue = losecount + 1
        return setLC(newvalue)
      }if (isWin == true && isLoser == false) {
        const newwinner = wincount + 1
        return setWC(newwinner)
      } else {
        return 
      }
    }
    if((guessedLetters.includes(letter) || isWin || isLoser) && (loadGame == true && (!isWin || !isLoser))) return trackCounters()
    setGLT(currentLetters => [...currentLetters,letter])}, 
  [guessedLetters,isWin,isLoser,losecount,wincount,loadGame])
  // Taking the event of a Keyboard press.   
  useEffect(()=>{
    const handler = (l:KeyboardEvent) => {
      const key = l.key
      if(!key.match(/^[a-z]$/) || loadInput == true) return

      l.preventDefault()
      addGuessLetter(key)
    }

    document.addEventListener('keypress',handler)

    return(()=>{
      document.removeEventListener('keypress',handler)
    })
  },[guessedLetters,addGuessLetter,loadInput])

  // Childs Components and Proprerties passing :) 
  return (
    <>
    <div className="pagetops">
      <Navbar/> 
      <div className="counters">
        <h1>
        Numero de Vitórias:{wincount} |
        Nº de Derrotas: {losecount}
        </h1>
      </div>
    </div>

    <div style={{
      fontSize:"16px",
      alignSelf: "center",
      textAlign: "center",
      color:'black'
    }}>
      {isWin && "Você ganhou my friend! - Clique no botão branco para jogar denovo"}
      {isLoser && "Você perdeu, vacilão - Clique no botão branco para chorar denovo"}
    </div>
    <div style={{
      display:(loadGame == true)? "flex":'none',
      flexFlow: "column wrap", 
    }}>
      <div className="pagecontent">
        <HangmanDraw  numberOfGuesses = {incorrectGuesses.length}/>
      </div>
      <div className="pageletter">
        <HangmanWord letterGuessed = {guessedLetters}  wordtoguess = {words_to_guess} incorrect = {incorrectGuesses}/>
      </div>
    </div>
    <div style={{
      display:(loadInput == true)? "flex" : "none",
      flexFlow:'column',
      maxWidth:'688px',
      width:'80%',
      paddingTop:'80px',
      alignSelf:'center',
      justifySelf:'center',
    }}>
      <input type="text"  value={words_to_guess} onChange={(e) => {if(loadInput == true && loadGame == false) {
        return setWTG(e.target.value)
      } else {
        e.preventDefault()
        return 
      }}} style={{
        color:"darkblue",
        backgroundColor:'white', 
        padding:'0px',
        fontSize:'32px',
        borderColor:'transparent',
        minHeight:'200px',
        height:'50vh',
        textAlign:'left',
      }}></input>
      <div className="icon">
        <img src={icon}/>
        <span>Máx. de 8 letras</span>
      </div>
    </div>
    <div style={{
      display:'flex',
      flexFlow:(loadGame == false && loadInput == false)? 'column wrap':'row wrap',
      alignSelf:'center',
      columnGap:'15px',
      rowGap:'25px',
      justifySelf:'center',
      width: '100%',
      maxWidth:'688px',
      height:(loadGame == false && loadInput == false)? '100%': 'fit-content',
      minHeight:'67px',
      alignItems:'center',
      justifyContent:(loadGame == false && loadInput == false)? 'center' :'space-between',
      paddingTop:'25px'
    }}>
      <BlueButton clickgame = {handleGame} trackInput={loadInput} />
      <WhiteButton clickInput={handleInput} trackGame={loadGame} />
    </div>
    </>
  )
}

export default App
