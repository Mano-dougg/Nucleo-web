import React from 'react';
import './Word.css'

interface WordProps {
  word: string;
  guesses: string[];
  failures: string[];
}

const Word: React.FC<WordProps> = ({ word, guesses, failures }) => {
  return (
    <div className="word">
      <div className="wordField">
      {word.split('').map((letter, index) => (
        <div className="letterField">
          <span
            key={index}
            className={`letter ${guesses.includes(letter) ? '' : 'transparent'}`}
          >

            {guesses.includes(letter) ? letter.toUpperCase() : '█'}
          </span>
          
          <hr className="line" />
        </div>
      ))}
      </div>

      <div className="failures">
        {failures.map((failure, index) => (
          <span key={index} className="failureLetter">
            {failure.toUpperCase()}
          </span>
        ))}
      </div>


    </div>
  );
};

export default Word;
