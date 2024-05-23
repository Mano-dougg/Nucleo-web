import React from 'react';

interface WordDisplayProps {
  palavra: string;
  correctLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ palavra, correctLetters }) => {
  const letras = palavra.split('');
  return (
    <div>
      {letras.map((letra, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '5px', padding: '10px' }}>
          {correctLetters.includes(letra) ? letra : ''}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
