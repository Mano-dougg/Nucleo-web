import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import Home from './pages/Home'
import AddWord from './pages/AddWord'
import Game from './pages/Game'
import './App.css'

function App() {
  const [word, setWord] = useState<string>('');

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddWord />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
