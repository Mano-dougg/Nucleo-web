import LetterList from '../letter-list/letter-list'
import MisteryWord from '../mistery-word/mistery-word'
import './game-interface.css'

export default function GameInterface({ word, guesses, addGuess, result, player }:
    {word:string, guesses:string[], failed:()=>void, addGuess:(guess:string, guesser:string)=>void, result:number, player:string}){
    return(
        <>
            <MisteryWord word={word} guesses={guesses} />
            <LetterList guesses={guesses} addGuess={addGuess} result={result} player={player}/>
        </>
    )
}