
type HangmanWordProps = {
    incorrectLetters: string[];
    wordToGuess: string;
    guessedLetters: string[];
}

function HangmanWord({wordToGuess, guessedLetters, incorrectLetters}: HangmanWordProps) {

    return (
        <>
            <div style={{display: 'flex', gap: '1rem', fontSize: '5rem', textTransform: 'uppercase', color:'var(--dark-blue)', textAlign: 'center'}}>

                {wordToGuess.split('').map((letter, index) => {
                    return <span style={{borderBottom: '0.5rem solid var(--dark-blue)', width: '5rem'}} key={index}>
                        <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>
                            {letter}
                        </span>
                        </span>
                })}

            </div>

            <div style={{display: 'flex', gap: '2rem', color:'#495057', fontSize:'2rem', textTransform: 'uppercase'}}>
                { incorrectLetters.map((letter) => {
                    return (
                        <span>{letter}</span>
                    )
                }) }
            </div>

        </>
    )
}

export default HangmanWord;