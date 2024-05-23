import React from 'react';

interface GameWordProps {
  wordToGuess: string;
  guessedLetters: string[];
  reveal: boolean; // Adicione esta linha
}

const GameWord: React.FC<GameWordProps> = ({ wordToGuess, guessedLetters, reveal }) => {
  return (
    <div>
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} style={{ borderBottom: '1px solid black', display: 'inline-block', width: '20px', marginRight: '5px' }}>
          {guessedLetters.includes(letter) || reveal ? letter : ''}
        </span>
      ))}
    </div>
  );
};

export default GameWord;
