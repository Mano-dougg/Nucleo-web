import { useCallback, useEffect, useState } from "react"
import HangmanDrawn from "../components/HangmanDrawn"
import HangmanWord from "../components/HangmanWord"
import Keyboard from "../components/Keyboard"
import ScoreBoard from "../components/ScoreBoard"
import './Game.css'


export type GameProps = {
    wordList: string[];
}


function Game({wordList}: GameProps) {

    const [wordToGuess, setWordToGuess] = useState<string>(newWord());
    
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const [reveal, setReveal] = useState<boolean>(false);
    
    const incorrectLetters: string[] = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));
    const isLoser = incorrectLetters.length >= 6;

    function newWord() {
        return wordList[Math.floor(Math.random() * wordList.length)];
    }

    function newGame() {
        setGuessedLetters([]);
        setReveal(false);
        setWordToGuess(newWord());
    }

    const addGuessedLetter = useCallback((letter: string) => {
        if(guessedLetters.includes(letter) || isWinner || isLoser) return;

        setGuessedLetters([...guessedLetters, letter]);
    }, [guessedLetters, isLoser, isWinner]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if(!key.match(/[a-z]/i)) return;

            e.preventDefault();

            addGuessedLetter(key);
        };

        document.addEventListener('keypress', handler);

        return () => {
            document.removeEventListener('keypress', handler);
        }

    }, [addGuessedLetter]);

    return (
        <>
            <div className="game-content">
                <ScoreBoard />
                <HangmanDrawn numberOfGuesses={incorrectLetters.length}/>
                <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} incorrectLetters={incorrectLetters} reveal={reveal}/>
                <div style={{alignSelf: 'stretch'}}>
                    <Keyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} disabled={isWinner || isLoser}/>
                </div>
                <div className="game-page-btns">
                    <button onClick={newGame}>Novo jogo</button>
                    <button onClick={() => setReveal(true)}>Desistir</button>
                </div>
            </div>
        </>
    )
}

export default Game;