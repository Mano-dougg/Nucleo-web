import styles from './Pag3.module.css'
import { Link } from 'react-router-dom'
import { HangmanDrawing } from './HangmanDrawing/HangmanDrawing'
import { HangmanWorld } from './HangmanWord/HangmanWord'
import { Keyboard } from './Keyboard/Keyboard'
import { useCallback, useEffect, useState } from 'react'

const words = ['alura', 'infojr', 'douglas']
let gamesWinner = parseInt(localStorage.getItem('Winner')) || 0;
let gamesLoser = parseInt(localStorage.getItem('Loser')) || 0;

export const Pag3 = () => {
    const [wordToGuess, setWordToGuess] = useState (() => {
        return words[Math.floor(Math.random() * words.length )]
      })

    const [guessedLetters, setGuessedLetters] = useState<string[]> ([])
    const incorrectGuesses = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter))
    
    const correctGuesses = guessedLetters.filter(
            (letter) => wordToGuess.includes(letter))
        
    const addGuessedLetters = useCallback(
        (letter:string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner){
                return
            }

            else{
                setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
            }
        }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if(!key.match(/^[a-z]$/)) {
                return
            }
            else{
                e.preventDefault()
                addGuessedLetters(key)
            }
        }
        
        document.addEventListener('keypress', handler)

        return (() => {
            document.removeEventListener('keypress', handler)
        })
    },[guessedLetters])

    const isLoser = incorrectGuesses.length >= 6
    const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

    useEffect(() => {
        if (isLoser) {
            localStorage.setItem('Loser', gamesLoser + 1);
        }
    
        if (isWinner) {
            localStorage.setItem('Winner', gamesWinner + 1);
        }
    }, [isLoser, isWinner, gamesLoser, gamesWinner])

        const handleNovoJogo = () => {
            window.location.reload(true)
        };
    return(
        <>
        <section className={styles.Pag3}>
            <article className={styles.articleResultado}>
                {isLoser && <h1> Vc perdeu</h1>}
                {isWinner && <h1> Parabéns, Vc ganhou</h1>}
            </article>
            <article className={styles.articleHistorico}> 
                <h1> Vitórias: {gamesWinner}</h1>
                <h1> Derrotas: {gamesLoser}</h1>
            </article>
            <article className={styles.articleForca}>
                <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
                <HangmanWorld guessedLetters = {guessedLetters} word={wordToGuess}/>
                <Keyboard 
                disabled = {isLoser || isWinner}
                addGuessedLetters = {addGuessedLetters} 
                activeLetters = {correctGuesses} 
                inactiveLetters ={ incorrectGuesses} />
            </article>
            <article className={styles.articleButtons}>
                    <div onClick={handleNovoJogo} className={styles.buttonM1}>
                        <p className={styles.pBranco}> Novo Jogo </p>
                    </div>
                    
                    <Link to='/pag1'>
                    <div className={styles.buttonM2}>
                        <p> Desistir </p>
                    </div>
                    </Link>
                </article>
        </section>
        </>
    )
}