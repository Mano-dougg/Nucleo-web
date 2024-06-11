import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './NewWord.css'
import Warning from '../assets/warning.svg'

const NewWord: React.FC = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [savedWords, setSavedWords] = useState<string[]>([]);

  useEffect(() => {
    const savedArray = localStorage.getItem('savedWords');
    if (savedArray) {
      setSavedWords(JSON.parse(savedArray));
    }
  }, []);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const handleClick = () => {
    if (!textValue)
      return;

      const updatedTexts = [...savedWords, textValue.toLowerCase()];
      setSavedWords(updatedTexts);
      localStorage.setItem('savedWords', JSON.stringify(updatedTexts));
  };

  return (
    <div className="newWord">
      <h2 className="text">Digite uma palavra ou frase</h2>

      <div className="options">
        
        <div className="input">
          <textarea className="text" id="word" name="word" value={textValue} onChange={handleTextChange} />
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