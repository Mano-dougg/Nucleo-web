import './mistery-word.css'

function MisteryCharacter({ character, guessed }:{character:string, guessed:boolean}){
    return(
        <span className="mistery-character">
            {character===' '?
            ' '
            :guessed?
            character
            :'_'}
        </span>
    )
}

export default function MisteryWord({ word, guesses }:{word:string, guesses:string[]}){
    const characters: JSX.Element[] = word.split('').map((character:string)=><MisteryCharacter character={character} guessed={guesses.includes(character)} />)

    return(
        <div className="mistery-characters-list">
            {characters}
        </div>
    )
}