import React, { useState, useEffect, KeyboardEvent } from 'react';
import Keyboard from './Keyboard.tsx';
import Word from './Word.tsx';
import { GameState } from '../types.ts';

const words = ['nuvem', 'pinturas', 'ingredientes', 'pista'];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const loadScore = () => {
  const savedWins = localStorage.getItem('wins');
  const savedLosses = localStorage.getItem('losses');
  return {
    wins: savedWins ? parseInt(savedWins, 10) : 0,
    losses: savedLosses ? parseInt(savedLosses, 10) : 0
  };
};

const saveScore = (wins: number, losses: number) => {
  localStorage.setItem('wins', wins.toString());
  localStorage.setItem('losses', losses.toString());
};

const hangmanImages = [
  '/images/hangman0.png',
  '/images/hangman1.png',
  '/images/hangman2.png',
  '/images/hangman3.png',
  '/images/hangman4.png',
  '/images/hangman5.png',
  '/images/hangman6.png',
];

const Game: React.FC = () => {
  const initialScore = loadScore();
  const [gameState, setGameState] = useState<GameState>('playing');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [word, setWord] = useState<string>(getRandomWord());
  const [wins, setWins] = useState<number>(initialScore.wins);
  const [losses, setLosses] = useState<number>(initialScore.losses);
  const maxErrors = 6;

  const incorrectGuesses = guesses.filter(letter => !word.includes(letter));
  const errors = incorrectGuesses.length;

  useEffect(() => {
    if (errors >= maxErrors) {
      setGameState('lost');
      setLosses((prevLosses) => prevLosses + 1);
    } else if (word.split('').every(letter => guesses.includes(letter))) {
      setGameState('won');
      setWins((prevWins) => prevWins + 1);
    }
  }, [guesses, errors, word]);

  useEffect(() => {
    saveScore(wins, losses);
  }, [wins, losses]);

  const handleGuess = (letter: string) => {
      if (!guesses.includes(letter) && gameState === 'playing') {
        setGuesses([...guesses, letter]);
      }
    };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const letter = event.key.toLowerCase();
    if (/[a-z]/.test(letter) && gameState === 'playing') {
      handleGuess(letter);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setGameState('playing');
  };

  const giveUp = () => {
    setLosses(prevLosses => prevLosses + 1);
    setGameState('lost');
    resetGame();
  };

  const resetScoreboard = () => {
    setWins(0);
    setLosses(0);
    resetGame();
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <h1>Jogo da Forca</h1>
      <div>
        <p>Vitórias: {wins}</p>
        <p>Derrotas: {losses}</p>
      </div>
      <img src={hangmanImages[errors]} alt={`Hangman stage ${errors}`} />
      <Word word={word} guesses={guesses} />
      <Keyboard onGuess={handleGuess} guesses={guesses} />
      {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
      {gameState === 'lost' && <p>Você perdeu! A palavra era: {word}</p>}
      {incorrectGuesses.length > 0 && (
        <div>
          <h2>Letras Erradas:</h2>
          <p>{incorrectGuesses.join(', ')}</p>
        </div>
      )}
      {(gameState === 'lost' || gameState === 'won') && (
        <button onClick={resetGame}>Reiniciar Partida</button>
      )}
      {gameState === 'playing' && (
        <button onClick={giveUp}>Desistir</button>
      )}
      <button onClick={resetScoreboard}>Novo Jogo</button>
    </div>
  );
};

export default Game;