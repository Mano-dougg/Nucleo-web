import './letter-list.css'

function LetterButton({ character, addGuess }:{character:string, addGuess:(guess:string)=>void}){
    const makeGuess = ():void=>{
        addGuess(character)
    }

    return(
        <button className='letter-button' onClick={makeGuess} key={character}>{character}</button>
    )
}

export default function LetterList({ guesses, addGuess, result }:
    { guesses:string[], addGuess:(guess:string)=>void, result:number}){
    const buttonList: JSX.Element[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
                                      .map((letter:string, i:number):JSX.Element=>guesses.includes(letter)?
                                      <span className='filler' key={i}> </span>
                                      :<LetterButton character={letter} addGuess={!result?addGuess:()=>{}} />)

    return(
        <div className='letter-button-list'>
            {buttonList}
        </div>
    )
}