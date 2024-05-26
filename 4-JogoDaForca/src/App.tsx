import { useState } from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { AddWord } from './pages/addWord/AddWord';
import { Game } from './pages/game/Game';

function App() {
  const words = ['CARRO', 'BOLA', 'CASA', 'COMPUTADOR', 'CELULAR', 'GATO', 'CACHORRO', 'MESA', 'CADEIRA', 'FONE']; 
  const [word, setWord] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/game" element={<Game word={word} setWord={setWord} wordList={words}/>} />
        <Route path="/add-word" element={<AddWord wordList={words} />} />
      </Routes>
    </BrowserRouter>      
  );
}

export default App
