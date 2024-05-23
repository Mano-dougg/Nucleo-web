import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import GameWord from './Components/game-word';
import { Link } from 'react-router-dom';
import { HangmanDrawing } from './hangmandrawing';

const words = ['amor', 'boca', 'sorriso', 'escola', 'caneta'];

function pickRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

type GameHistory = {
  word: string;
  date: string;
  result: string;
};

const Second: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState(pickRandomWord().toUpperCase());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameHistory, setGameHistory] = useState<GameHistory[]>(() => {
    const savedHistory = localStorage.getItem('gameHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
  }, [gameHistory]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.toUpperCase().includes(letter)
  );

  const isLoser = incorrectLetters.length >= 10;
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter.toUpperCase()))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (!gameOver && !guessedLetters.includes(letter)) {
        setGuessedLetters(currentLetters => [...currentLetters, letter.toUpperCase()]);
      }
    },
    [guessedLetters, gameOver]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase(); 
      if (!gameOver && key.match(/^[A-Z]$/) && !guessedLetters.includes(key)) {
        addGuessedLetter(key);
      }
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter, gameOver]);

  useEffect(() => {
    if (isWinner || isLoser) {
      setGameOver(true);

      const newHistory: GameHistory = {
        word: wordToGuess,
        date: new Date().toLocaleString(),
        result: isWinner ? 'Ganhou' : 'Perdeu'
      };
      setGameHistory(prevHistory => [...prevHistory, newHistory]);
    }
  }, [isWinner, isLoser, wordToGuess]);

  return (
    <div>
      <header>
        <div id="logo">Alura</div>
      </header>
      <main>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <GameWord reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />

        <div>
          <h3>Letras Incorretas:</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            {incorrectLetters.map((letter, index) => (
              <span key={index} style={{ color: 'red' }}>
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div>
          <button onClick={() => {
            setWordToGuess(pickRandomWord().toUpperCase());

            setGuessedLetters([]);
            setGameOver(false);
          }}>Novo Jogo
          </button>
          <Link to='/'>
            <button onClick={() => {
              setGameOver(true);
              setWordToGuess(pickRandomWord());
            }}>Desistir</button>
          </Link>
        </div>
        {isLoser && <div>Você perdeu!</div>}
        {isWinner && <div>Você ganhou!</div>}

        {/* Histórico de Partidas */}
        <div>
          <h3>Histórico de Partidas:</h3>
          <ul>
            {gameHistory.map((game, index) => (
              <li key={index}>
                {game.date} - {game.word} - {game.result}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Second;
