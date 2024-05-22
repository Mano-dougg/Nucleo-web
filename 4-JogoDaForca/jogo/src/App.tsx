import './App.css'
import Play from './play'
import { useState } from 'react'


  function App() {
    const [mostrarJogo, setMostrarJogo] = useState(false);

    const handleClick = () => {
      setMostrarJogo(true);
    };

    

  
    return (
      <>
        {!mostrarJogo && (
        <div className="home">
          <h2>Bem-vindo ao jogo!</h2>
          <p>Clique no botão para começar.</p>
          <button onClick={handleClick}>Let's play!</button>
        </div>
      )}

      {mostrarJogo && (
        <div className="jogo">
          <Play></Play>
        </div>
      )}
        

      </>
    );
  }
  
  export default App;
  
