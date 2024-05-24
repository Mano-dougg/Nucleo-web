import styles from './Word.module.css';

interface Props {
  word: string;
  guessedLetters: string[];
}

const Word: React.FC<Props> = ({ word, guessedLetters }) => {
  return (
    <div className={styles.wrapper}>
      {word.split('').map((char, index) => (
        <div className={styles.letterContainer} key={index}>
          <span className={guessedLetters.includes(char) ? styles.letter : styles.letterHidden}>{char}</span>
          <div className={styles.letterRectangle} />
        </div>
      ))}
    </div>
  );
};

export default Word;