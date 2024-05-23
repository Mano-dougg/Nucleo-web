import React from 'react';

interface GameKeyboardProps {
  onLetterClick: (letter: string) => void;
}

const GameKeyboard: React.FC<GameKeyboardProps> = ({ onLetterClick }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div>
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => onLetterClick(letter)}>
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default GameKeyboard;
