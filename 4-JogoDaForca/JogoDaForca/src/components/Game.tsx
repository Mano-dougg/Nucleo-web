import React, { useState } from 'react';
import { GameState } from '../types.ts';

const Game: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('playing');


    return (
        <div>
            <h1>Jogo da Forca</h1>
            {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
            {gameState === 'lost' && <p>Você perdeu!</p>}
        </div>
    );
};

export default Game;