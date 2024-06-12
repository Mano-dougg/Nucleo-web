import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './NewWord.css'
import Warning from '../assets/warning.svg'

const NewWord: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [savedWords, setSavedWords] = useState<string[]>([]);

  useEffect(() => {
    const savedArray = localStorage.getItem('savedWords');
    if (savedArray) {
      setSavedWords(JSON.parse(savedArray));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (!inputValue)
      return;

      const updatedTexts = [...savedWords, inputValue.toLowerCase()];
      setSavedWords(updatedTexts);
      localStorage.setItem('savedWords', JSON.stringify(updatedTexts));
  };

  return (
    <div className="newWord">
      <h2 className="text">Digite uma palavra ou frase</h2>

      <div className="options">
        
        <div className="input">
          <input className="text" id="word" name="word" type="text" maxLength={8} value={inputValue} onChange={handleInputChange} />
          <label  className="warning" htmlFor="word"><img src={Warning} alt="aviso: máximo de 8 letras" /><span>Máx. de 8 letras</span></label>
        </div>

        <div className="buttons">
          <Link to="/game"><button className="save-continue" onClick={handleClick} >Salvar e começar</button></Link>
          <Link to="/"><button className="cancel">Cancelar</button></Link>
        </div>

      </div>
    </div>
  );
};

export default NewWord;