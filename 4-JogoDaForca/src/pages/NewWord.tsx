import React from 'react';
import './NewWord.css'
import Warning from '../assets/warning.svg'

const NewWord: React.FC = () => {
  return (
    <div className="newWord">
      <h2 className="text">Digite uma palavra ou frase</h2>

      <div className="options">
        
        <div>
          <input type="text" id="word" name="word" />
          <label  className="warning" htmlFor="word"><img src={Warning} alt="aviso: máximo de 8 letras" /><span>Máx. de 8 letras</span></label>
        </div>

        <div className="buttons">
          <button className="save-continue">Salvar e começar</button>
          <button className="cancel">Cancelar</button>
        </div>

      </div>
    </div>
  );
};

export default NewWord;