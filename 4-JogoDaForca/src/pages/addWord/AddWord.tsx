import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ExclamationCircleFill } from 'react-bootstrap-icons'
import styles from './AddWord.module.css';

interface AddWordProps {
  wordList: string[];
}

export function AddWord({ wordList }: AddWordProps) {
  const navigate = useNavigate();
  const [wordToAdd, setWordToAdd] = useState<string>('');
  
   useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (key.match(/[a-zA-Z]/) && key.length === 1) {
        setWordToAdd(wordToAdd + key.toUpperCase());
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [wordToAdd, setWordToAdd]);
  
  const handleCancelGameClick = () => {
    setWordToAdd('');
    navigate('/');
  };
  
  const handleStartGameClick = () => {
    if (wordToAdd.length > 8 || wordToAdd.length === 0) {
      return;
    }
    wordList.push(wordToAdd);
    console.log(wordList);
    navigate('/game');
  };
  
  return (  
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Digite uma nova palavra ou frase</h1>
        <div className={styles.callOut}>
          <ExclamationCircleFill className={styles.exclamationIcon}/>
          <p>Máx. de 8 letras</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.addWordButton} onClick={handleStartGameClick}>Adicionar</button>
          <button className={styles.cancellButton} onClick={handleCancelGameClick}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}