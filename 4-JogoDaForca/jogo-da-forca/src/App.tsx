import React, { useState } from 'react';
import WordForm from './components/addWord/WordForm';
import GameDisplay from './components/game/GameDisplay';

const App: React.FC = () => {
  const [lista, setLista] = useState<string[]>(['banana', 'casa']);

  return (
    <div>
      <WordForm lista={lista} setLista={setLista} />
      <GameDisplay lista={lista}></GameDisplay>
    </div>
  );
};

export default App;
