import styles from './Home.module.css';

export function Home() {
  return (
    <main>
      <div className={styles.buttonContainer}>
        <button className={styles.startButton}>Começar a jogar</button>
        <button className={styles.addWordButton}>Adicionar nova palavra</button>
      </div>
    </main>
  );
}