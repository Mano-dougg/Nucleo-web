import { useCallback, useContext, useEffect, useState } from "react";
import Hangman from "@/components/custom/Hangman";
import Keyboard from "@/components/custom/Keyboard";
import WordToGuess from "@/components/custom/WordToGuess";
import portugueseWords from "../../src/wordList/portugueseWords";
import EndingMessage from "@/components/custom/EndingMessage";
import { UserContext } from "@/context/UserContext";
import { updateUserContext } from "@/utils/dataManipulation";

function Game() {
  const newWord: string = portugueseWords[ Math.floor(Math.random() * portugueseWords.length) ];
  const [ currentWord, setCurrentWord ] = useState<string>(newWord);
  const [ guessedLetters, setGuessedLetters ] = useState<string[]>([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // Current game state
  const badGuesses = guessedLetters.filter((letter) => !currentWord.includes(letter));
  const gameWon = currentWord.split("").every((letter) => guessedLetters.includes(letter));
  const gameLost = badGuesses.length >= 6;
  const currentPrecision = (guessedLetters?.length - badGuesses?.length) / guessedLetters?.length * 100

  useEffect(() => {
    function handleGameEnd(isGameWon: boolean): void {
      updateUserContext(currentUser.username, isGameWon, currentPrecision, setCurrentUser);
    }
    if (gameLost) handleGameEnd(false);
    if (gameWon) handleGameEnd(true);
  }, [currentPrecision, currentUser.username, gameLost, gameWon, setCurrentUser])

  // Prevents rerendering when input changes
  const addGuess = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || gameLost || gameWon) return;
      setGuessedLetters(guessedLetters => [ ...guessedLetters, letter ]);
    },
    [ gameLost, gameWon, guessedLetters ]
  );

  function newGame() {
    setCurrentWord(portugueseWords[ Math.floor(Math.random() * portugueseWords.length) ]);
    setGuessedLetters([]);
  }

  return (
    <div className={
      `bg-white dark:bg-black flex flex-col items-center justify-center min-h-screen gap-4 px-4 relative`
    }>
      <>
        {gameWon && (
          <EndingMessage winMessage={true} newGame={newGame} />
        )}
        {gameLost && (
          <EndingMessage winMessage={false} newGame={newGame} />
        )}
      </>
      <Hangman badGuesses={badGuesses.length} />
      <WordToGuess currentWord={currentWord} guessedLetters={guessedLetters} showWord={gameLost} />
      <Keyboard
        disabled={gameWon || gameLost}
        activeLetters={guessedLetters.filter((letter) => currentWord.includes(letter))}
        inactiveLetters={badGuesses}
        addGuess={addGuess}
      />
    </div>
  );
}

export default Game;
