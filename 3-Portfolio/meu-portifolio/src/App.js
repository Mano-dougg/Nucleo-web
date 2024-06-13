import React, { useState } from 'react';
import './App.css';
import Cabecalho from './components/Header/cabecalho';
import Titulo from './components/Titulo/titulo';
import Descricao from './components/Descricao/descricao';
import DescricaoImg from './components/DescricaoImg/descricaoimg';


function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="App">
      <Cabecalho toggleMenu={toggleMenu} menuVisible={menuVisible} />
      {!menuVisible && (
        <>
          <Titulo/>
          <Descricao/>
          <DescricaoImg/>
        </>
      )}
    </div>
  );
}

export default App;
