import React from 'react';

interface WordProps {
  word: string;
  guesses: string[];
}

const Word: React.FC<WordProps> = ({ word, guesses }) => {
  return (
    <div className='word'>
      {word.split('').map((letter, index) => (
        <span key={index}>
          {guesses.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;
