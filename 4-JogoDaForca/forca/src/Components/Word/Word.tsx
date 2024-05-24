import {Palavra} from './word.ts'

interface WordProps {
    word: string
    guessedLetters: string[]
    revelar: boolean
}

function Word({word, guessedLetters, revelar}: WordProps){
    
    return(
        <Palavra>
            {word.split('').map((letter, index) => (
                <span style={{borderBottom: '0.2rem solid black', width: '30px', textAlign:'center'}} key={index}> 

                    <span style={{
                        visibility: guessedLetters.includes(letter) || revelar
                            ? 'visible' 
                            :'hidden',
                        color: !guessedLetters.includes(letter) && revelar ? 'red' : 'black',
                        }}
                    >
                        {letter} 

                    </span>

                </span>
            ))}
        </Palavra>
    )
}

export default Word