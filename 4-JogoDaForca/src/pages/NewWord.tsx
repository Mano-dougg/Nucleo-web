import React from 'react';
import './NewWord.css'

const NewWord: React.FC = () => {
  return (
    <div className="newWord">
      <h2>Digite uma palavra ou frase</h2>
      <input type="text" />

      <div className="options">
        <button className="save-continue">Salvar e começar</button>
        <button className="cancel">Cancelar</button>
      </div>
    </div>
  );
};

export default NewWord;