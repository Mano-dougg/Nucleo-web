import React, { useEffect } from 'react';
import './Hangman.css'

import Err0 from '../assets/err0.svg';
import Err1 from '../assets/err1.svg';
import Err2 from '../assets/err2.svg';
import Err3 from '../assets/err3.svg';
import Err4 from '../assets/err4.svg';
import Err5 from '../assets/err5.svg';
import Err6 from '../assets/err6.svg';

interface AttemptProps {
  attemptsLeft: number;
}

const Hangman: React.FC<AttemptProps> = ({ attemptsLeft }) => {
  useEffect(() => {
    console.log(attemptsLeft);
  }, [attemptsLeft]);

  const getErrorImage = (attempts: number) => {
    switch (attempts) {
      case 0: return Err6;
      case 1: return Err5;
      case 2: return Err4;
      case 3: return Err3;
      case 4: return Err2;
      case 5: return Err1;
      case 6: return Err0;
      default: return Err0;
    }
  };

  return (
    <div className="hangman">
      <img src={getErrorImage(attemptsLeft)} alt="hangman" />
    </div>
  );
};

export default Hangman;
