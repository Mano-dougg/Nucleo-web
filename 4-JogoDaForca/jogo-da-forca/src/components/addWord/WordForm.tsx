import React, { useState } from 'react';

interface WordFormProps {
  lista: string[];
  setLista: React.Dispatch<React.SetStateAction<string[]>>;
}

const WordForm: React.FC<WordFormProps> = ({ lista, setLista }) => {
  const [novoItem, setNovoItem] = useState<string>('');

  const adicionarItem = (evento: React.FormEvent) => {
    evento.preventDefault();
    if (novoItem.trim() !== '') {
      setLista([...lista, novoItem]);
      setNovoItem('');
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default WordForm;
