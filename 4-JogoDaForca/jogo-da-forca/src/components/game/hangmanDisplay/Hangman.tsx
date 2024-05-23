import React from 'react';
import './Hangman.css'

interface GameDisplayProps {
    wrongLetters: string[];
  }

const Hangman: React.FC <GameDisplayProps>= ({wrongLetters}) => {
  return (
    <div className='hangman'>
        <div className={(wrongLetters.length>=4)?'head':''}> </div>
        <div className={(wrongLetters.length>=6)?'left-arm':''}> </div>
        <div className={(wrongLetters.length>=7)?'right-arm':''}> </div>
        <div className={(wrongLetters.length>=8)?'left-leg':''}> </div>
        <div className={(wrongLetters.length>=9)?'right-leg':''}> </div>
        <div className={(wrongLetters.length>=5)?'body':''}> </div>
        <div className={(wrongLetters.length>=3)?'rope':''}> </div>
        <div className={(wrongLetters.length>=1)?'bar':''}> </div>
        <div className={(wrongLetters.length>=2)?'top':''}> </div>
        <div className='bottom'> </div>
    </div>
  );
};

export default Hangman;
