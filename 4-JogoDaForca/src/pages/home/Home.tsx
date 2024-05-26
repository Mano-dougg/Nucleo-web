import { useNavigate } from 'react-router';
import styles from './Home.module.css';

export function Home() {
  const navigate = useNavigate();
  
  const handleAddWordClick = () => {
    navigate('/add-word');
  };

  const handleStartGameClick = () => {
    navigate('/game');
  };
  
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.startButton} onClick={handleStartGameClick}>Começar a jogar</button>
      <button className={styles.addWordButton} onClick={handleAddWordClick}>Adicionar nova palavra</button>
    </div>
  );
}