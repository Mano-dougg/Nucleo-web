import styles from './HangmanWord.module.css'

interface HangmanWordProps
{
    word: string;
    guessedLetters: string[];
}

export const HangmanWorld = ({word, guessedLetters}: HangmanWordProps) => {
    
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