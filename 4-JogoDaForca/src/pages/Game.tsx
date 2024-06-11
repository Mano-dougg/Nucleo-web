import React, { useState, useEffect } from 'react';
import Word from './Word';
import Input from './Input';

const words = ["react", "typescript", "javascript", "programming"];

interface GameProps {
  onGameEnd: (win: boolean) => void;
}

const Game: React.FC<GameProps> = ({ onGameEnd }) => {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    const wordLetters = word.split('');
    const guessedAllLetters = wordLetters.every(letter => guesses.includes(letter));

    if (guessedAllLetters) {
      onGameEnd(true);
      resetGame();
    }

    if (attemptsLeft === 0) {
      onGameEnd(false);
      resetGame();
    }
  }, [guesses, attemptsLeft, word, onGameEnd]);

  const resetGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]);
    setAttemptsLeft(6);
  };

  const handleGuess = (letter: string) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);

      if (!word.includes(letter)) {
        setAttemptsLeft(attemptsLeft - 1);
      }
    }
  };

  return (
    <div>
      <Word word={word} guesses={guesses} />
      <Input onGuess={handleGuess} />
      <p>Tentativas restantes: {attemptsLeft}</p>
    </div>
  );
};

export default Game;
