import React from 'react';
import './style.css'; // Importando o arquivo CSS para estilização

interface TecladoProps {
  onLetraClicada: (letra: string) => void;
  letrasAdivinhadas: string[];
}

const Teclado: React.FC<TecladoProps> = ({ onLetraClicada, letrasAdivinhadas }) => {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard">
      {alfabeto.map((letra) => (
        <button
          key={letra}
          className="key"
          onClick={() => onLetraClicada(letra)}
          disabled={letrasAdivinhadas.includes(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}

export default Teclado;
