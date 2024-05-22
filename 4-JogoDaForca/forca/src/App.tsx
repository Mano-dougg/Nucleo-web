import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gamepage from './Components/Game/Gamepage.tsx';
import Homepage from './Components/Home/Homepage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Gamepage />} />
      </Routes>
    </Router>
  );
};

export default App;


/*function App() {

  return (
    <>
      <Gamepage />
      
    </>
  )
}

export default App*/