import './letter-list.css'

function LetterButton({ character, addGuess, player }:{character:string, addGuess:(guess:string, guesser:string)=>void, player:string}){
    const makeGuess = ():void=>{
        addGuess(character, player)
    }

    return(
        <button className='letter-button' onClick={makeGuess} key={character}>{character}</button>
    )
}

export default function LetterList({ guesses, addGuess, result, player }:
    { guesses:string[], addGuess:(guess:string, guesser:string)=>void, result:number, player:string}){
    const buttonList: JSX.Element[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
                                      .map((letter:string, i:number):JSX.Element=>guesses.includes(letter)?
                                      <span className='filler' key={i}> </span>
                                      :<LetterButton character={letter} addGuess={!result?addGuess:()=>{}} player={player} />)

    return(
        <div className='letter-button-list'>
            {buttonList}
        </div>
    )
}