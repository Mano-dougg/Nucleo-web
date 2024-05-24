import React, { useState, useEffect, KeyboardEvent } from 'react';
import GameHistory from './GameHistory.tsx';
import Keyboard from './Keyboard.tsx';
import Word from './Word.tsx';
import { GameState } from '../types.ts';
import buttonOff from '../../public/images/ToggleOff-light.svg'
import buttonOn from '../../public/images/ToggleOn-dark.svg'

const words = ['NUVEM', 'PINTURAS', 'INGREDIENTES', 'PISTA'];

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
    letter = letter.toUpperCase();
      if (!guesses.includes(letter) && gameState === 'playing') {
        setGuesses([...guesses, letter]);
      }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const letter = event.key.toUpperCase();
      if (/^[A-Z]$/.test(letter) && gameState === 'playing') {
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
      <h1>Jogo da Forca</h1>
      <div className='container'>
        <div className="menu-container">
          <div>
            <div className='setShow'>
              <p>Histórico: </p>
              <img className='button-toggle'
                src={showHistory ? buttonOn : buttonOff}
                alt="Histórico"
                onClick={() => setShowHistory(!showHistory)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className='setShow'>
              <p>Teclado:</p>
              <img className='button-toggle'
                src={showKeyboard ? buttonOn : buttonOff}
                alt="Teclado"
                onClick={() => setShowKeyboard(!showKeyboard)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className="scoreboard">
            <p>Vitórias: {wins}</p>
            <p>Derrotas: {losses}</p>
          </div>
        </div>
        <div className='image-hangman'>
          <img id='hangman' src={hangmanImages[errors]} alt={`Hangman stage ${errors}`}/>
        </div>
        {showHistory && (<GameHistory history={history} />)}
      </div>
      <div className='game'> 
          <Word word={word} guesses={guesses} />
          {incorrectGuesses.length > 0 && (
            <div className='incorrectGuesse'>
              <p>{incorrectGuesses.join('  ')}</p>
            </div>
          )}
          <div className='result'>
            {gameState === 'lost' && <p>Você perdeu! A palavra era: {word}</p>}
            {gameState === 'won' && <p>Parabéns! Você ganhou!</p>}
          </div>
          
          <div className='buttons'>
            <button id='Reset' onClick={resetScoreboard}>Novo Jogo</button>
            {(gameState === 'lost' || gameState === 'won') && (
              <button className='NewMatch' onClick={resetGame}>Nova Partida</button>
            )}
            {(gameState === 'playing') && (
              <button className='NewMatch' onClick={giveUp} disabled={guesses.length === 0}>Desistir</button>
            )}
          </div>
        </div>
      {showKeyboard && <Keyboard onGuess={handleGuess} guesses={guesses} />}
    </div>
  );
};

export default Game;