import styles from './Keyboard.module.css'
import styled from 'styled-components'

interface Keyboard{
    letter: string;
    Keyboard: string;
}

const keys: Array<string> = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l','ç',
    'z','x','c','v','b','n','m',
]

export const Keyboard = () => {
    return(
    <>
    <article className={styles.centralizer}>
    <section className={styles.keyboard}>
        {keys.map((letter) => (
            <button key={letter}>{letter.toUpperCase()}</button>
        ))}
    </section>
    </article>
    </>
    )
}