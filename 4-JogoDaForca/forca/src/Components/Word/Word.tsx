import {Palavra} from './word.ts'

interface WordProps {
    word: string
    guessedLetters: string[]
}

function Word({word, guessedLetters}: WordProps){
    
    return(
        <Palavra>
            {word.split('').map((letter, index) => (
                <span style={{borderBottom: '0.2rem solid black', width: '30px', textAlign:'center'}} key={index}> 

                    <span style={{visibility: guessedLetters.includes(letter) 
                        ? 'visible' 
                        :'hidden',}}>
                        {letter} 
                    </span>

                </span>
            ))}
        </Palavra>
    )
}

export default Word