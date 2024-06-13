import "./App3.css"
import Logo from "./components/logo.png";
import HangmanDrawing from "./components-jogo-da-forca/hagman-drawing";
import HangmanWord from "./components-jogo-da-forca/hagman-word";
import Keyboard from "./components-jogo-da-forca/keyboard";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/Button";



const words = ['carro', 'casa', 'fruta', 'livro', 'bahia', 'menino', 'brasil', 'trainee', 'desenvolvedor', 'java', 'python']

export function App3() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)


    const [guessedLetters, setGuessedLetters] = useState<string[]>([]) //letras que são digitadas

    const incorrectGuesses = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    )

    const correctGuesses = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    )
    
    const isLoser= incorrectGuesses.length >= 6
    const isWinner= wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

    const addGuessedLetters = useCallback(
        (letter: string) => {
            if(guessedLetters.includes(letter) || isLoser || isWinner) return

            setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
        }, 
        [guessedLetters]
    )

    useEffect (() => {
        const handler = ((e: KeyboardEvent) => {
            const key = e.key

            if(!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetters(key)
        }) as unknown as EventListener

        document.addEventListener('keypress', handler )

        return (() => {
            document.removeEventListener('keypress', handler)
        })

    }, [guessedLetters, isLoser, isWinner])

    useEffect(() => {
        if (isLoser) {
            setLosses(losses + 1);
        } else if (isWinner) {
            setWins(wins + 1);
        }
    }, [isLoser, isWinner]);

    const resetGame = () => {
        setWordToGuess(words[Math.floor(Math.random() * words.length)]);
        setGuessedLetters([]);
    };


    
    return(
        <div className="elementos-pag3">
            <div className="logo">
                <img src={Logo} alt="imagem-da-logo" />
            </div>
            <div className="elementos-forca">
                {isLoser && "Você perdeu, tente novamente. Clique em novo Jogo ou atualize a página"}
                {isWinner && "Parabéns você venceu!!! Atualize a página ou clique em novo jogo para jogar novamente"}
                <div className="placar">
                    <p>Triunfos: {wins}</p>
                    <p>Derrotas: {losses}</p>
                </div>
                <h1>Jogo da Forca</h1>
                <HangmanDrawing numberOfGuesses={incorrectGuesses.length}/>
                <HangmanWord 
                    reveal={isLoser} 
                    guessedLetters={guessedLetters} 
                    word={wordToGuess} 
                />
                <Keyboard
                    disabled={isLoser || isWinner}
                    activeLetters={ correctGuesses} 
                    inactiveLetters={incorrectGuesses}
                    addGuessedLetters={addGuessedLetters}
                />
                <div className="botoes-pag3">
                    <Button 
                        text='Novo jogo'
                        color="#0A3871"
                        width="332px"
                        textColor='#FFFFFF'
                        height="67px"
                        padding="24px"
                        gap="8px"
                        borderRadius="24px"
                        borderColor="#0A3871"
                        borderWidth='none'
                        borderStyle='none'
                        fontSize="16px"
                        fontWeight="400"
                        lineHeight="19.36px"
                        opacity="0px"
                        onClick={resetGame}                     
                    />
                
            
                    <Link to= "/App2">
                        <Button 
                            text='Desistir'
                            color=" #F3F5FC"
                            textColor='#0A3871'
                            width="332px"
                            height="67px"
                            padding="24px"
                            gap="8px"
                            borderRadius="24px"
                            borderColor="#0A3871"
                            borderWidth='1px'
                            borderStyle = "solid"
                            fontSize="16px"
                            fontWeight="400"
                            lineHeight="19.36px"
                            opacity="0px"
                        />
                    </Link>
                </div>
            </div>
        </div>    
    );
}