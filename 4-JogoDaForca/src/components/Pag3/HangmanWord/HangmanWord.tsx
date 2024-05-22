import styles from './HangmanWord.module.css'

type Word = {
    word: string;
}

export const HangmanWorld = () => {
    const word = 'teste'
    const guessedLetters = ['s', 't']
    return(
        <>
        <section className={styles.wrapper}>
            {word.split('').map((letter, index) => (
                <span className={styles.lineLetter} key={index}>
                    <span style={{visibility: guessedLetters.includes(letter) ? 'visible': 'hidden' }} >
                        {letter}
                    </span>
                </span>
            ))}
        </section>
        
        </>
    )
}