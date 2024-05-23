
function HangmanWord() {
    const word:string = '';

    const guessedLeters: string[] = [];


    return (
        <>
            <div style={{display: 'flex', gap: '1rem', fontSize: '5rem', textTransform: 'uppercase', color:'var(--dark-blue)'}}>

                {word.split('').map((letter, index) => {
                    return <span style={{borderBottom: '0.5rem solid var(--dark-blue)'}} key={index}>
                        <span style={{visibility: guessedLeters.includes(letter) ? 'visible' : 'hidden'}}>
                            {letter}
                        </span>
                        </span>
                })}

            </div>
        </>
    )
}

export default HangmanWord;