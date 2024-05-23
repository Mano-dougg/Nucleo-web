import styles from './HangmanDraw.module.css';

export function HangmanDraw() {
  return (
    <div className={styles.hangmanDrawContainer}>
      <div className={styles.horizontalLine} />
      <div className={styles.verticalLine1} />
      <div className={styles.verticalLine2} />
      <div className={styles.base} />
      <div className={styles.stickHead} />
      <div className={styles.stickBody} />
      <div className={styles.stickLeftArm} />
      <div className={styles.stickRightArm} />
      <div className={styles.stickLeftLeg} />
      <div className={styles.stickRightLeg} />
    </div>
  );
}