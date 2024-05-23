// --REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// --CSS
import '../src/styles/index.scss'
// --COMPONENTS
import Principal from './pages/principal.tsx';
import Escolha from './pages/escolha.tsx';
import Jogo from './pages/jogo.tsx';


// --REACT-DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/escolha" element={<Escolha />} />
        <Route path="/jogo" element={<Jogo />} />
      </Routes>

    </Router>
  </React.StrictMode>,
)