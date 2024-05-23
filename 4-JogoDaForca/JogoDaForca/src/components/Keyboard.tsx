import React from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guesses: string[];
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guesses }) => {
  return (
    <div>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guesses.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
