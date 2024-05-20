import { useState, useEffect } from "react";
import s from "./Hangman.module.css";
import Keyboard from '../Keyboard/Keyboard'

export default function Hangman() {
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const maxWrongGuesses = 6;

    useEffect(() => {
        const words = JSON.parse(localStorage.getItem("words") ?? '""');
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
    }, []);

    const renderWord = () => {
        return word.split("").map((letter, index) => (
            <span key={index} className={s.letter}>
                {guessedLetters.includes(letter) ? letter.toUpperCase() : "_"}
            </span>
        ));
    };

    

    const isGameOver = wrongGuesses >= maxWrongGuesses;
    const isGameWon =
        word &&
        word.split("").every((letter) => guessedLetters.includes(letter));

    return (
        <div className={s.container}>
            <h1>Jogo da Forca</h1>
            <div className={s.hangmanContainer}>
                <div className={s.hangman}>
                    <div className={s.base} />
                    <div className={s.pole} />
                    <div className={s.beam} />
                    <div className={s.rope} />
                    {wrongGuesses > 0 && <div className={s.head} />}
                    {wrongGuesses > 1 && <div className={s.body} />}
                    {wrongGuesses > 2 && <div className={s.arm1} />}
                    {wrongGuesses > 3 && <div className={s.arm2} />}
                    {wrongGuesses > 4 && <div className={s.leg1} />}
                    {wrongGuesses > 5 && <div className={s.leg2} />}
                </div>
            </div>
            <div className={s.wordContainer}>{renderWord()}</div>
            <div className={s.alphabetContainer}>{
                <Keyboard word={word} 
                guessedLetters={guessedLetters} 
                setGuessedLetters={setGuessedLetters} 
                setWrongGuesses={setWrongGuesses} 
                wrongGuesses={wrongGuesses}
                />
            }</div>
            {isGameOver && (
                <div className={s.message}>
                    Você perdeu! A palavra era: {word}
                </div>
            )}
            {isGameWon && <div className={s.message}>Você ganhou!</div>}
            <div className={s.buttonsContainer}>
                <button
                    className={s.newGameButton}
                    onClick={() => window.location.reload()}
                >
                    Novo jogo
                </button>
                <button
                    className={s.giveUpButton}
                    onClick={() => setWrongGuesses(maxWrongGuesses)}
                >
                    Desistir
                </button>
            </div>
        </div>
    );
}
