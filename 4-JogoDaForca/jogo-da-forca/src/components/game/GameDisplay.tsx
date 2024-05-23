import React, { useState, useEffect } from 'react';
import WordDisplay from './wordDisplay/WordDisplay';
import Hangman from './hangmanDisplay/Hangman';

interface GameDisplayProps {
  lista: string[];
}

const GameDisplay: React.FC<GameDisplayProps> = ({ lista }) => {
  // sorteia palavra da lista de palavras atualizada
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * lista.length);
    return lista[randomIndex];
  };

  const [randomWord, setRandomWord] = useState<string>('');
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([])

  useEffect(() => {
    setRandomWord(getRandomWord());
    setCorrectLetters([]);
    setWrongLetters([]);
  }, [lista]);

  const handleLetterClick = (letter: string) => {
    if (randomWord.includes(letter) && !correctLetters.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    } 
    else if (!randomWord.includes(letter) && !wrongLetters.includes(letter)){
      setWrongLetters([...wrongLetters, letter ]);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const letter = event.key.toLowerCase();
    if (/^[a-z]$/.test(letter)) {
      handleLetterClick(letter);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [correctLetters, wrongLetters, randomWord]);

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div>
      <h2>Palavra Sorteada</h2>
      <p>{randomWord}</p>
      <Hangman wrongLetters={wrongLetters}></Hangman>
      <div>
        {letters.map((letter) => (
          <button key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <WordDisplay palavra={randomWord} correctLetters={correctLetters} />
      
      <div>
        {wrongLetters.map((letter) => (
          <p key={letter}>
            {letter}
          </p>
        ))}
      </div>


    </div>
  );
};

export default GameDisplay;
