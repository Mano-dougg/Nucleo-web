import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Word from '../components/Word';
import Input from '../components/Input';

const savedWords = localStorage.getItem('savedWords');
const words: string = savedWords ? JSON.parse(savedWords) : '';

interface GameProps {
  onGameEnd: (win: boolean) => void;
}

const Game: React.FC<GameProps> = ({ onGameEnd }) => {
  const navigate = useNavigate();

  const [gameStarted, setGameStarted] = useState(false);
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);

    setGameStarted(true);
  }, []);

  useEffect(() => {
    if(!gameStarted)
      return;

    const wordLetters = word.split('');
    const guessedAllLetters = wordLetters.every(letter => guesses.includes(letter));

    if (guessedAllLetters) {
      onGameEnd(true);
      resetGame();
      navigate("/");
    }

    if (attemptsLeft === 0) {
      onGameEnd(false);
      resetGame();
      navigate("/");
    }
  }, [gameStarted, guesses, attemptsLeft, word, navigate]);

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
