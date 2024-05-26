import { useCallback, useEffect, useState } from "react";
import words from "../wordList.json";
import { Drawing } from "./Components/Drawing";
import { Word } from "./Components/Word";
import { Keyboard } from "./Components/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function GamePage() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [won, setWon] = useState(0);
  const [lost, setLost] = useState(0);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) {
        return;
      }

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();

      if (isWinner) {
        setWon((prevScore) => prevScore + 1);
      }

      if (isLoser) {
        setLost((prevScore) => prevScore + 1);
      }

      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [isWinner, isLoser]);

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "900px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "35px",
        margin: "0 auto",
        alignItems: "center",
        top: "40px",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "15px",
          color: "#000",
        }}
      >
        {isWinner && 'Parabéns! Aperte "Enter" para tentar novamente'}
        {isLoser && 'Aperte "Enter" para tentar novamente'}
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          marginTop: "-15px",
          color: "#7F1FBF",
        }}
      >
        Ganhou: {won} <br />
        Perdeu: {lost}
      </div>
      <div style={{ transform: "scale(0.6)", margin: "-100px" }}>
        <Drawing numberOfGuesses={incorrectLetters.length} />
      </div>
      <Word
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default GamePage;
