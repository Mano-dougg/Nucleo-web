import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import AddWord from './pages/AddWord'
import Game from './pages/Game'
import './App.css'


function App() {
  const [wordList, setWordsList] = useState<string[]>(['macaco', 'navio', 'caneta', 'blusa']);

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddWord />} />
          <Route path="/game" element={<Game wordList={wordList}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
