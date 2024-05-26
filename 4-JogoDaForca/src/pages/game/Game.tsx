import { useEffect, useState } from "react";
import { HangmanDraw } from "../../components/hangman/HangmanDraw";
import { Word } from "../../components/word/Word";
import styles from './Game.module.css';
import { useNavigate } from "react-router";

interface GameProps {
  word: string;
  wordList: string[];
  setWord: (word: string) => void;
}

export function Game({ word, setWord, wordList }: GameProps) {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter((letter) => word.indexOf(letter) === -1).length;
  const [score, setScore] = useState({ wins: 0, losses: 0 });

  const isLoser = incorrectGuesses >= 6;
  const isWinner = word.split('').every((letter) => guessedLetters.indexOf(letter) !== -1);
  const navigate = useNavigate();
    
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isLoser || isWinner) return;
      const { key } = event;
      if (key.match(/[a-zA-Z]/) && key.length === 1 && guessedLetters.indexOf(key.toUpperCase()) === -1) {
        setGuessedLetters([...guessedLetters, key.toUpperCase()]);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [guessedLetters, isLoser, isWinner]);
  
  const handleNewGameClick = () => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(newWord);
    setGuessedLetters([]);
  };
  
  useEffect(() => {
    if (isLoser) {
      setScore((prevScore) => ({ ...prevScore, losses: prevScore.losses + 1 }));
    }
    if (isWinner) {
      setScore((prevScore) => ({ ...prevScore, wins: prevScore.wins + 1 }));
    }
  }, [setScore, isLoser, isWinner, setWord, word]);
  
  const handleCancelClick = () => {
    navigate('/');
  };
  
  return (
    <div className={styles.gameContainer}>
      <HangmanDraw incorrectGuesses={incorrectGuesses} />
      <Word word={word} guessedLetters={guessedLetters} isLoser={isLoser} />
      <div className={styles.buttonContainer}>
        <button className={styles.newGameButton} onClick={handleNewGameClick}>Novo jogo</button>
        <button onClick={handleCancelClick} className={`${styles.cancellButton} ${isLoser ? styles.cancellButtonDisabled : ''}`}>Cancelar</button>
      </div>
      <div className={styles.scoreContainer}>
        <p>Vitórias: {score.wins}</p>
        <p>Derrotas: {score.losses}</p>
      </div>
    </div>
  );
}