import React, { useState, useEffect } from 'react';
import Keyboard from './Keyboard.tsx';
import Word from './Word.tsx';
import { GameState } from '../types.ts';

const words = ['nuvem', 'pinturas', 'ingredientes', 'pista'];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const Game: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('playing');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [word, setWord] = useState<string>(getRandomWord());
    const maxErrors = 6;

    const incorrectGuesses = guesses.filter(letter => !word.includes(letter));
    const errors = incorrectGuesses.length;

    const handleGuess = (letter: string) => {
        if (!guesses.includes(letter) && gameState === 'playing') {
          setGuesses([...guesses, letter]);
        }
      };

    useEffect(() => {
    if (errors >= maxErrors) {
        setGameState('lost');
    } else if (word.split('').every(letter => guesses.includes(letter))) {
        setGameState('won');
    }
    }, [guesses, errors, word]);

    const resetGame = () => {
      setWord(getRandomWord());
      setGuesses([]);
      setGameState('playing');
    };

    return (
        <div>
            <h1>Jogo da Forca</h1>
            <Word word={word} guesses={guesses} />
            <Keyboard onGuess={handleGuess} guesses={guesses} />
            {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
            {gameState === 'lost' && <p>Você perdeu! A palavra era: {word}</p>}
            <div>
              <h2>Letras Erradas:</h2>
              <p>{incorrectGuesses.join(', ')}</p>
            </div>
            {(gameState === 'lost' || gameState === 'won') && (
              <button onClick={resetGame}>Reiniciar Partida</button>
            )}
        </div>
    );
};

export default Game;