import { useContext, useState } from "react"
import Hang from "../../components/hang/hang"
import "./playtime.css"
import GameInterface from "../../components/game-interface/game-interface"
import { wordContext } from "../../../constants"

export default function Playtime(){
    const [fails, setFails] = useState(0)
    const [guesses, setGuesses] = useState([' '])
    //valores referência para result:
    //0 <=> jogando
    //1 <=> ganhou
    //2 <=> perdeu
    const [result, setResult] = useState(0)

    const failed = ():void=>{
        setFails(fails+1)
        if(fails>5)lose()
    }

    const addGuess = (guess:string):void=>{
        setGuesses(guesses.concat(guess))
        if(word.split('')
            .every((letter:string)=>guesses.includes(letter))
            )win()
    }

    const win = ()=>{
        setResult(1)
    }

    const lose = ()=>{
        setResult(2)
    }

    const word:string = useContext(wordContext).wordGetter()

    return(
        <div className="game-container">
            <Hang fails={fails}/>
            <GameInterface word={word} guesses={guesses} failed={failed} addGuess={addGuess} result={result}/>
        </div>
    )
}