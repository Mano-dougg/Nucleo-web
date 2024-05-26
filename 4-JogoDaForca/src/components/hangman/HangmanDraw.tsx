import styles from './HangmanDraw.module.css';

interface HangmanDrawProps {
  incorrectGuesses: number;
}

export function HangmanDraw({
  incorrectGuesses,
}: HangmanDrawProps) {
  const parts = [
    styles.stickHead,
    styles.stickBody,
    styles.stickLeftArm,
    styles.stickRightArm,
    styles.stickLeftLeg,
    styles.stickRightLeg,
  ];

  return (
    <div className={styles.hangmanDrawContainer}>
      <div className={styles.horizontalLine} />
      <div className={styles.verticalLine1} />
      <div className={styles.verticalLine2} />
      <div className={styles.base} />
      {parts.slice(0, incorrectGuesses).map((part, index) => (
        <div key={index} className={part} />
      ))}
    </div>
  );
}