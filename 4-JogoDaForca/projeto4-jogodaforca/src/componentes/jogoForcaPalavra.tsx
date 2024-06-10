import './jogoForcaPalavra.css'
import { useLocation } from 'react-router-dom';

interface JogoForcaPalavraProps {
    reveal: boolean
    word: string
    guessedLetters: string[]
    
}

export default function JogoForcaPalavra({ reveal, word: initialWord, guessedLetters } :  JogoForcaPalavraProps){
   
    const location = useLocation();
    const { palavra } = location.state || {};
    const word = palavra || initialWord;

    return(

        <div className="out_linha">
            <div className='linha'>
                {word.split("").map((letra, index) => (
                    <span 
                    style={{ borderBottom:"0.1em solid white" }}
                    key={index}
                    >

                    <span 
                    style={{ 
                        visibility: guessedLetters.includes(letra) || reveal ? 'visible' : 'hidden',
                        color: !guessedLetters.includes(letra) || reveal ? 'rgb(200, 250, 230)' : 'white'
                    }}
                    >
                    {letra}
                    </span>

                    </span>
                ))}

                <div>
                   
                </div>
            </div>
        </div>
        
    )

}