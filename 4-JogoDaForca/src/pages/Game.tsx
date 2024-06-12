import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Hangman from '../components/Hangman.tsx';
import Word from '../components/Word';
import Input from '../components/Input';
import './Game.css';

const Game: React.FC = () => {
  const navigate = useNavigate();

  const savedWords = localStorage.getItem('savedWords');
  const words: string = savedWords ? JSON.parse(savedWords) : ['hangman'];

  const [gameStarted, setGameStarted] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [failures, setFailures] = useState<string[]>([]);

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
      resetGame()
      handleGameEnd(true);
    }

    if (attemptsLeft === 0) {
      resetGame()
      handleGameEnd(false);
    }
  }, [gameStarted, guesses, attemptsLeft, word, navigate]);

  const resetGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]);
    setFailures([])
    setAttemptsLeft(6);
  };

  const quit = () => {
    setWins(0);
    setLosses(0);
    navigate("/")
  }

  const handleGameEnd = (win: boolean) => {
    win ? setWins(wins + 1) : setLosses(losses + 1);
  };

  const handleGuess = (letter: string) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);

      if (!word.includes(letter)) {
        setFailures([...failures, letter]);
        setAttemptsLeft(attemptsLeft - 1);
      }
    }
  };

  return (
    <div className="game">
      <div className="scoreboard">
        <span>Vitórias: {wins}</span><br />
        <span>Derrotas: {losses}</span>
      </div>

      <div className="info">
        <Hangman attemptsLeft={attemptsLeft}/>
        <Word word={word} guesses={guesses} failures={failures} />
        <Input onGuess={handleGuess} />
      </div>

      <div className="buttons">
          <button className="new-game" onClick={resetGame} >Novo jogo</button>
          <button className="quit" onClick={quit} >Desistir</button>
        </div>
    </div>
  );
};

export default Game;
