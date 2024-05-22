import "./App3.css"
import Logo from "./components/logo.png";
import HangmanDrawing from "./components-jogo-da-forca/hagman-drawing";
import HangmanWord from "./components-jogo-da-forca/hagman-word";
import Keyboard from "./components-jogo-da-forca/keyboard";
import { useState } from "react";



const words = ['carro', 'casa', 'fruta', 'livro', 'bahia', 'menino', 'brasil', 'trainee', 'desenvolvedor', 'java', 'python']

export function App3() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    const [guessedLetters, setGuessedLetters] = useState<string[]>(['a', 'i', 'c', 'r'])

    const incorrectGuesses = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    )

    return(
        <div className="elementos-pag3">
            <div className="logo">
                <img src={Logo} alt="imagem-da-logo" />
            </div>
            <div className="elementos-forca">
                <h1>Jogo da Forca</h1>
                <HangmanDrawing numberOfGuesses={incorrectGuesses.length}/>
                <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
                <Keyboard />
            </div>
        </div>    
    );
}