import React from 'react';

interface WordProps {
  word: string;
  guesses: string[];
}

const Word: React.FC<WordProps> = ({ word, guesses }) => {
  return (
    <div>
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${letter === ' ' ? 'white-space' : ''}`}
          style={letter === ' ' ? { color: 'white' } : {}}
        >
          {guesses.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;
