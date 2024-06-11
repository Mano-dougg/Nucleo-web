import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";
import "./Hangman.css";


function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [showMenu, setShowMenu] = useState(true);
  const [gameMode, setGameMode] = useState<"single" | "multi">("single");
  const [currentPlayer, setCurrentPlayer] = useState<"Player 1" | "Player 2">("Player 1");
  const [showHistory, setShowHistory] = useState(false);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters(currentLetters => [...currentLetters, letter]);
      if (gameMode === "multi") {
        setCurrentPlayer(currentPlayer === "Player 1" ? "Player 2" : "Player 1");
      }
    },
    [guessedLetters, isWinner, isLoser, gameMode, currentPlayer]
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
  }, [addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
      setCurrentPlayer("Player 1");
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  useEffect(() => {
    if (isWinner) {
      setWins(prevWins => prevWins + 1);
    } else if (isLoser) {
      setLosses(prevLosses => prevLosses + 1);
    }
  }, [isWinner, isLoser]);

  const [gameHistory, setGameHistory] = useState<{ word: string; result: "Vitória" | "Derrota" }[]>([]);

  useEffect(() => {
    if (isWinner) {
      setGameHistory(prevHistory => [...prevHistory, { word: wordToGuess, result: "Vitória" }]);
    } else if (isLoser) {
      setGameHistory(prevHistory => [...prevHistory, { word: wordToGuess, result: "Derrota" }]);
    }
  }, [isWinner, isLoser]);

  return (
    <div className="geral">
      {showMenu ? (
        <div className="menu">
          <button className="inicio" onClick={() => {
            setGameMode("single");
            setShowMenu(false);
          }}>1 Jogador</button>
          <button className="inicioDois" onClick={() => {
            setGameMode("multi");
            setShowMenu(false);
          }}>2 Jogadores</button>
        </div>
      ) : (
        <div className="jogo">
          <div className="placar">
            Vitórias: {wins} | Derrotas: {losses}
          </div>
          <div className="vez-container">
            <div className="vez">
              {gameMode === "multi" && !isWinner && !isLoser && `Vez de:`}
            </div>
            <div className="jogaUm">
              {gameMode === "multi" && !isWinner && !isLoser && currentPlayer !== "Player 2" && `${currentPlayer}`}
            </div>
            <div className="jogaDois">
              {gameMode === "multi" && !isWinner && !isLoser && currentPlayer !== "Player 1" && `${currentPlayer}`}
            </div>
            <div className="mensagem">
            {isWinner && "Parabéns! Você ganhou! Pressione Enter para próxima partida."}
            {isLoser && "Que pena, pressione Enter para próxima partida."}
          </div>
          </div>
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
          <div style={{ alignSelf: "stretch" }}>
            <Keyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter((letter: string) => wordToGuess.includes(letter))}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
          </div>
          <button className="historico" onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? "Esconder Histórico" : "Mostrar Histórico"}
          </button>
          {showHistory && (
            <div className="historico">
              <h2>Histórico de Partidas</h2>
              <ul>
                {gameHistory.map((game, index) => (
                  <li key={index}>
                    Palavra: {game.word} | Resultado: {game.result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
