// Keyboard.tsx
import React from 'react';

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guesses: string[];
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guesses }) => {
  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onGuess(key)}
              disabled={guesses.includes(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
