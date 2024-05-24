import { useState } from "react";
import words from "./wordList.json";
import { Drawing } from "./Drawing";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <div className="container">
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <Drawing />
      <Word />
      <Keyboard />
    </div>
  );
}

export default App;
