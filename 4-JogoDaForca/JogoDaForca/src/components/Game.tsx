import React, { useState, useEffect, KeyboardEvent } from 'react';
import GameHistory from './GameHistory.tsx';
import Keyboard from './Keyboard.tsx';
import Word from './Word.tsx';
import { GameState } from '../types.ts';
import buttonOff from '../../public/images/ToggleOff-light.svg'
import buttonOn from '../../public/images/ToggleOn-dark.svg'

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

const loadHistory = () => {
  const savedHistory = localStorage.getItem('history');
  return savedHistory ? JSON.parse(savedHistory) : [];
};

const saveHistory = (history: { result: string; word: string }[]) => {
  localStorage.setItem('history', JSON.stringify(history));
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
  const initialHistory = loadHistory();
  const [showHistory, setShowHistory] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [word, setWord] = useState<string>(getRandomWord());
  const [wins, setWins] = useState<number>(initialScore.wins);
  const [losses, setLosses] = useState<number>(initialScore.losses);
  const [history, setHistory] = useState<{ result: string; word: string }[]>(initialHistory);
  const maxErrors = 6;

  const incorrectGuesses = guesses.filter(letter => !word.includes(letter));
  const errors = incorrectGuesses.length;

  useEffect(() => {
    if (errors >= maxErrors) {
      setGameState('lost');
      setLosses(prevLosses => prevLosses + 1);
      setHistory(prevHistory => [...prevHistory, { result: 'Perdeu', word }]);
    } else if (word.split('').every(letter => guesses.includes(letter))) {
      setGameState('won');
      setWins(prevWins => prevWins + 1);
      setHistory(prevHistory => [...prevHistory, { result: 'Ganhou', word }]);
    }
  }, [guesses, errors, word]);

  useEffect(() => {
    saveScore(wins, losses);
  }, [wins, losses]);

  useEffect(() => {
    saveHistory(history);
  }, [history]);

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
    if (guesses.length > 0) {
      setLosses(prevLosses => prevLosses + 1);
      setGameState('lost');
      setHistory(prevHistory => [...prevHistory, { result: 'Desistiu', word }]);
      resetGame();
    }
  };
  
  const resetScoreboard = () => {
    setWins(0);
    setLosses(0);
    resetGame();
    setHistory([]);
    saveHistory([]);
  };

  return (
    <div className="game-container" onKeyDown={handleKeyDown} tabIndex={0}>
      {showHistory && (
        <div className="game-history-container">
          <GameHistory history={history} />
        </div>
      )}
      <div className="container">
        <h1>Jogo da Forca</h1>
        <p>Histórico: </p>
        <img
          src={showHistory ? buttonOn : buttonOff}
          alt="Histórico"
          onClick={() => setShowHistory(!showHistory)}
          style={{ cursor: 'pointer' }}
        />
        <p>Teclado:</p>
        <img
          src={showKeyboard ? buttonOn : buttonOff}
          alt="Teclado"
          onClick={() => setShowKeyboard(!showKeyboard)}
          style={{ cursor: 'pointer' }}
        />
        <div className="scoreboard">
          <p>Vitórias: {wins}</p>
          <p>Derrotas: {losses}</p>
        </div>
        <img src={hangmanImages[errors]} alt={`Hangman stage ${errors}`} />
        <Word word={word} guesses={guesses} />
        {showKeyboard && <Keyboard onGuess={handleGuess} guesses={guesses} />}
        {gameState === 'lost' && <p>Você perdeu! A palavra era: {word}</p>}
        {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
        {incorrectGuesses.length > 0 && (
          <div>
            <h2>Letras Erradas:</h2>
            <p>{incorrectGuesses.join(', ')}</p>
          </div>
        )}
        {(gameState === 'lost' || gameState === 'won') && (
          <button onClick={resetGame}>Nova Partida</button>
        )}
        {gameState === 'playing' && (
          <button onClick={giveUp}>Desistir</button>
        )}
        <button onClick={resetScoreboard}>Novo Jogo</button>
      </div>
    </div>
  );
};

export default Game;