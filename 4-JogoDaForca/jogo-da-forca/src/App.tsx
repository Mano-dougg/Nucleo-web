import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import Keyboard from './components/keyboard';
import HangmanWord from './components/hangmanword';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 375px;
`;

const words = ['python', 'java', 'javascript'];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const addGuessedLetter = useCallback((letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    }
  }, [guessedLetters]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [addGuessedLetter]);

  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter));

  return (
    <Wrapper>
      <HangmanPart>
        <h2>Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
      </HangmanPart>
      <Keyboard letrasAtivas={correctGuesses} letrasInativas={incorrectGuesses} addGuessedLetter={addGuessedLetter} />
    </Wrapper>
  );
}

export default App;
