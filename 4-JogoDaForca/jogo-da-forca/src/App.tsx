import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import Keyboard from './components/keyboard';
import HangmanWord from './components/hangmanword';
import Message from './components/win-lose';
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
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar se o Message deve ser exibido

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

  const derrota = incorrectGuesses.length >= 6;
  const vitoria = wordToGuess.split('').every((letter) => guessedLetters.includes(letter)); // Corrigindo a verificação de vitória

  return (
    <Wrapper>
      {vitoria && (
        <Message onClose={() => setShowMessage(false)}>
          <h2 style={{ color: 'black' }}>Você venceu!</h2>
          <p>Parabéns! Você acertou a palavra.</p>
        </Message>
      )}

      {derrota && (
        <Message onClose={() => setShowMessage(false)}>
          <h2>Você perdeu!</h2>
          <p>Infelizmente não foi dessa vez. Tente Novamente.</p>
        </Message>
      )}

      <HangmanPart>
        <h2>Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord revelar={derrota} guessedLetters={guessedLetters} word={wordToGuess} />
      </HangmanPart>

      <Keyboard letrasAtivas={correctGuesses} disabled={vitoria || derrota} letrasInativas={incorrectGuesses} addGuessedLetter={addGuessedLetter} />
    </Wrapper>
  );
}

export default App;
