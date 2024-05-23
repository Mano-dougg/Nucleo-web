
type HangmanWordProps = {
    reveal: boolean;
    incorrectLetters: string[];
    wordToGuess: string;
    guessedLetters: string[];
}

function HangmanWord({wordToGuess, guessedLetters, incorrectLetters, reveal}: HangmanWordProps) {

    return (
        <>
            <div style={{display: 'flex', gap: '1rem', fontSize: '5rem', textTransform: 'uppercase', color:'var(--dark-blue)', textAlign: 'center'}}>

                {wordToGuess.split('').map((letter, index) => {
                    return <span style={{borderBottom: '0.5rem solid var(--dark-blue)', width: '5rem'}} key={index}>
                        <span style={{visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'var(--dark-blue)'}}>
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