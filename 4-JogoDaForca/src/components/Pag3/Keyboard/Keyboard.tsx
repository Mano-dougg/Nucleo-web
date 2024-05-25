import styles from './Keyboard.module.css'

interface Keyboard{
    letter: string;
    Keyboard: string;
}

interface KeyboardProps {
    disabled?: boolean;
    activeLetters: string[]; 
    inactiveLetters: string[];
    addGuessedLetters: (letter:string) => void;
}

const keys: Array<string> = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l','ç',
    'z','x','c','v','b','n','m',
]

export const Keyboard = ({disabled = false, activeLetters,inactiveLetters, addGuessedLetters}: KeyboardProps) => {
    
    return(
    <>
    <article className={styles.centralizer}>
    <section className={styles.keyboard}>
        {keys.map((letter) => {
              const isActive = !activeLetters.includes(letter)
              const isInactive = !inactiveLetters.includes(letter)
            return (
            <button onClick={() => addGuessedLetters(letter)} key={letter} disabled={!(isActive && isInactive) || disabled}>
                {letter.toUpperCase()}
            </button>
            )
 })}
    </section>
    </article>
    </>
    )
}