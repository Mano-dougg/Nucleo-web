import React, { useState } from 'react';
import Keyboard from './Keyboard.tsx';
import { GameState } from '../types.ts';

const Game: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('playing');
    const [guesses, setGuesses] = useState<string[]>([]);

    const handleGuess = (letter: string) => {
        if (!guesses.includes(letter) && gameState === 'playing') {
          setGuesses([...guesses, letter]);
        }
      };

    return (
        <div>
            <h1>Jogo da Forca</h1>
            <Keyboard onGuess={handleGuess} guesses={guesses} />
            {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
            {gameState === 'lost' && <p>Você perdeu!</p>}
        </div>
    );
};

export default Game;