import React, { useState } from 'react';

interface WordFormProps {
  lista: string[];
  setLista: React.Dispatch<React.SetStateAction<string[]>>;

  isAddWordActive: boolean;
  setIsAddWordActive: React.Dispatch<React.SetStateAction<boolean>>;

  setIsGameActive: React.Dispatch<React.SetStateAction<boolean>>;

  startNewGame: () => void;
}

const WordForm: React.FC<WordFormProps> = ({ lista, setLista, isAddWordActive, setIsAddWordActive, setIsGameActive, startNewGame}) => {
  const [novoItem, setNovoItem] = useState<string>('');

  const adicionarItem = (evento: React.FormEvent) => {
    evento.preventDefault();
    if (novoItem.trim() !== '') {
      const item : string= novoItem.toUpperCase()
      setLista([...lista, item]);
      setNovoItem('');
    }
  };

  const handleGameActive = () => {
    startNewGame();
    setIsGameActive(true);
    setIsAddWordActive(false);
  }

  return (
    <div className={isAddWordActive? 'word-form' : 'hidden'}>
      <h1>Minha Lista</h1>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={adicionarItem}>
        <input
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="Digite um novo item"
        />
        <button type="submit">Adicionar Item</button>
      </form>

      <button onClick={handleGameActive}> Jogar </button>
    </div>
  );
};

export default WordForm;
