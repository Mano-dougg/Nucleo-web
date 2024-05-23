import React, { useState } from 'react';
import Keyboard from './Keyboard.tsx';
import Word from './Word.tsx';
import { GameState } from '../types.ts';

const words = ['nuvem', 'pinturas', 'ingredientes', 'pista'];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const Game: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('lost');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [word, setWord] = useState<string>(getRandomWord());

    const handleGuess = (letter: string) => {
        if (!guesses.includes(letter) && gameState === 'playing') {
          setGuesses([...guesses, letter]);
        }
      };


    return (
        <div>
            <h1>Jogo da Forca</h1>
            <Word word={word} guesses={guesses} />
            <Keyboard onGuess={handleGuess} guesses={guesses} />
            {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
            {gameState === 'lost' && <p>Você perdeu! A palavra era: {word}</p>}
        </div>
    );
};

export default Game;