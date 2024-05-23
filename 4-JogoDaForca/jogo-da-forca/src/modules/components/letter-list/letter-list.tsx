import './letter-list.css'

function LetterButton({ character, word, failed, addGuess }:{character:string, word:string, failed:()=>void, addGuess:(guess:string)=>void}){
    const makeGuess = ():void=>{
        if(!word.includes(character))failed()
        addGuess(character)
    }

    return(
        <button className='letter-button' onClick={makeGuess}>{character}</button>
    )
}

export default function LetterList({ word, guesses, failed, addGuess, clickable }:
    {word:string, guesses:string[], failed:()=>void, addGuess:(guess:string)=>void, clickable:boolean}){
    const buttonList: JSX.Element[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
                                      .map((letter:string):JSX.Element=>guesses.includes(letter)?
                                      <span> </span>
                                      :<LetterButton character={letter} word={word} failed={failed} addGuess={clickable?addGuess:()=>{}} />)

    return(
        <div className='letter-button-list'>
            {buttonList}
        </div>
    )
}