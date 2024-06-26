import './mistery-word.css'

function MisteryCharacter({ character, guessed }:{character:string, guessed:boolean}){
    return(
        <span className="mistery-character">
            {character===' '? 
            <br/>
            :character==='-' || guessed?
            character
            :'_'}
        </span>
    )
}

export default function MisteryWord({ word, guesses }:{word:string, guesses:string[]}){
    const characters: JSX.Element[] = word.split('').map((character:string)=><MisteryCharacter character={character} guessed={guesses.includes(character)} />)
    const liGuesses: JSX.Element[] = guesses.map((guess:string)=>(<li>{guess}</li>))

    return(
        <div className='mistery-characters flexer'>
            <div className="mistery-characters__list">
                {characters}
            </div>
            <ul className='mistery-characters__guesses'>
                {liGuesses}
            </ul>
        </div>
    )
}