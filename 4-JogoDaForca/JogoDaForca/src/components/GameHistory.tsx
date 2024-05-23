import React from 'react';

interface GameHistoryProps {
  history: { result: string; word: string }[];
}

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  return (
    <div className="game-history">
      <h2>Histórico de Partidas</h2>
      <ul>
        {history.map((game, index) => (
          <li key={index}>
            {game.result}: {game.word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
