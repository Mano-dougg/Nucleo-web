import LetterList from '../letter-list/letter-list'
import MisteryWord from '../mistery-word/mistery-word'
import './game-interface.css'

export default function GameInterface({ word, guesses, failed, addGuess, result }:
    {word:string, guesses:string[], failed:()=>void, addGuess:(guess:string)=>void, result:number}){
    return(
        <>
            <MisteryWord word={word} guesses={guesses} />
            <LetterList word={word} guesses={guesses} failed={failed} addGuess={addGuess} clickable={result===0}/>
        </>
    )
}