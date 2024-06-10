import React from 'react';
import './App.css';
import LogoAlura from './assets/logo-alura.svg';
import Home from './pages/Home';
import NewWord from './pages/NewWord';

const App: React.FC = () => {
  return (
    <div className="App">
      <img className="logo" src={LogoAlura} alt="" />

      {/* <Home /> */}
      <NewWord />
    </div>
  );
};

export default App;