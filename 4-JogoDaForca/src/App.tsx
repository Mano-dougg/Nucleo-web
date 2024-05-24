import "./App.css";
import Forca from "./components/Boneco";
import Palavra from "./components/palavraEBarra";
import Teclado from "./components/senhaLetra";

import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { PalavraPJogar } from "./Dados/Palavras";

const Fundo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
`;

const PartesForca = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`;

const Palavros = [...PalavraPJogar];

const ResetButton = ({ onClick }: any) => {
  return <button onClick={onClick}>Jogue Novamente!</button>;
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const { word, hint } = Palavros[Math.floor(Math.random() * Palavros.length)];
    return { word, hint };
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.word.includes(letter)
  );
  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.word.includes(letter)
  );
  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess.word
    .split("")
    .every((letter: string) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  const resetGame = () => {
    setWordToGuess(Palavros[Math.floor(Math.random() * Palavros.length)]);
    setGuessedLetters([]);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      resetGame();
    }
  };

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z-ç]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    }) as unknown as EventListener;

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleReset = useCallback(() => {
    resetGame();
  }, []);

  return (
    <Fundo>
      <h2>Jogo da Forca 😵</h2>
      <PartesForca>
        <Forca numberOfGuesses={incorrectGuesses.length} />
        <h2>{wordToGuess.hint}</h2>
        <Palavra
          reveal={isLoser}
          guessedLetters={guessedLetters}
          word={wordToGuess.word}
        />
      </PartesForca>
      {isLoser && "Você perdeu 😢"}
      {isWinner && "Parabéns, você venceu 😊!!!"}
      {isLoser || isWinner ? <ResetButton onClick={handleReset} /> : null}
      <Teclado
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </Fundo>
  );
}

export default App;
