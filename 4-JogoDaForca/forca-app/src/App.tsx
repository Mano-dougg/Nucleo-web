import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'
import Home from './pages/Home'
import AddWord from './pages/AddWord'
import Game from './pages/Game'
import './App.css'


function App() {
  const { getItem, setItem } = useLocalStorage();

  const storedWordList = getItem('wordList');

  const initialWordList = storedWordList ? storedWordList : ['navio'];

  const [wordList, setWordList] = useState<string[]>(initialWordList);

  // Somente utilizado para criar a lista de palavras na primeira vez que o usuário acessa o site
  useEffect(() => {
    if(!storedWordList) {
      setItem('wordList', initialWordList);
    }
  })

  // Atualiza a lista de palavras no localStorage toda vez que a lista de palavras do useState é alterada
  useEffect(() => {
    setItem('wordList', wordList);
  }, [wordList, setItem]);

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddWord wordList={wordList} setWordList={setWordList}/>} />
          <Route path="/game" element={<Game wordList={wordList} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
