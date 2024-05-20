import s from './Keyboard.module.css'

interface KeyboardProps {
    guessedLetters: string[],
    word: string,
    setGuessedLetters:(array: string[]) => void
    setWrongGuesses:(number: number) => void
    wrongGuesses: number
}


export default function Keyboard ({ guessedLetters, word, setGuessedLetters, setWrongGuesses, wrongGuesses }: KeyboardProps){
    const handleGuess = (letter: string) => {
        if (typeof letter !== "string" || guessedLetters.includes(letter))
            return;
        setGuessedLetters([...guessedLetters, letter]);
        if (!word.includes(letter)) {
            setWrongGuesses(wrongGuesses + 1);
        }
    };


    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet.map((letter) => (
        <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={
                guessedLetters.includes(letter) ||
                word
                    .split("")
                    .every((letter) => guessedLetters.includes(letter))
            }
            className={s.letterButton}
        >
            {letter.toUpperCase()}
        </button>
    ));
};