import React, { useEffect, useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import GameWord from './Components/game-word';

const words = ['amor', 'boca', 'sorriso', 'escola', 'caneta'];

function pickRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

const Third: React.FC = () => {
  let navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [newWord, setNewWord] = useState('');
  const [words, setWords] = useState<string[]>(['amor', 'boca', 'sorriso', 'escola', 'caneta']);
  const [wordToGuess, setWordToGuess] = useState(pickRandomWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const toggleAddSection = () => {
    setIsVisible(!isVisible);
  };

  const addNewWord = () => {
    if (newWord.length >= 4 && newWord.length <= 8) {
      console.log('Word added:', newWord);
      setWords(prevWords => [...prevWords, newWord]); // Adiciona a nova palavra à lista
      setNewWord('');

      // Se a função addNewWord for verdadeira, redireciona para a página './segunda'
      navigate("/segunda");
    } else {
      console.log('Invalid word input');
    }
  };

  const cancel = () => {
    navigate("/");
  };

  useEffect(() => {
    const addBtn = document.getElementById('add-btn');
    const addWordBtn = document.getElementById('add-word-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    if (addBtn && addWordBtn && cancelBtn) {
      addBtn.addEventListener('click', toggleAddSection);
      addWordBtn.addEventListener('click', addNewWord);
      cancelBtn.addEventListener('click', cancel);

      return () => {
        addBtn.removeEventListener('click', toggleAddSection);
        addWordBtn.removeEventListener('click', addNewWord);
        cancelBtn.removeEventListener('click', cancel);
      };
    }
  }, []);

  return (
    <>
      <section id="add-section" className={isVisible ? '' : 'hide'}>
        <div>
          <input
            id="new-word"
            type="text"
            placeholder="Digite uma palavra"
            autoFocus
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          <p id="notice">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44 0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
            </svg>
            Permitido palavras de 4 a 8 letras e sem acentuação
          </p>
          <div className="buttons-container">
            <button id="add-word-btn" onClick={addNewWord}>Salvar e iniciar jogo</button>
            <button id="cancel-btn" onClick={cancel}>Cancelar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Third;
