import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { HangmanDraw } from './components/hangman/HangmanDraw';
import Word from './components/word/Word';

function App() {
  const [word] = useState<string>('MAD');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (key.match(/[a-zA-Z]/) && guessedLetters.indexOf(key.toUpperCase()) === -1) {
        setGuessedLetters([...guessedLetters, key.toUpperCase()]);
        console.log(key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [guessedLetters]);

  return (
    <div className={styles.container}>
      <HangmanDraw />
      <Word word={word} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App
