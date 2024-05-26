import styles from './Word.module.css';

interface Props {
  word: string;
  guessedLetters: string[];
  isLoser: boolean;
}

export function Word({ word, guessedLetters, isLoser }: Props) {
  const incorrectLetters = guessedLetters.filter((letter) => word.indexOf(letter) === -1);
  
  return (
    <div className={styles.lettersContainer}>
      <div className={styles.wrapper}>
        {word.split('').map((char, index) => (
          <div className={styles.letterContainer} key={index}>
            <span className={ `${guessedLetters.includes(char) ? styles.letter : styles.letterHidden} ${isLoser ? styles.redLetter : ''}`}>{char}</span>
            <div className={styles.letterRectangle} />
          </div>
        ))}
      </div>
      <div className={styles.incorrectLettersContainer}>
        {incorrectLetters.length > 0 && incorrectLetters.map((letter, index) => (
          <span key={index} className={styles.incorrectLetter}>{letter}</span>
        ))}
      </div>
    </div>
  )
}