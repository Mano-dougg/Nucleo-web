// --REACT
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.scss';


// -- FUNCTION
function Principal() {
  const navegar = useNavigate();

  function escolha() {
    navegar('/escolha');
  };
  function jogo() {
    navegar('/jogo');
  };
  
  return (
    <div id='principal'>

      <button className='button grande' onClick={escolha}>Começar novo jogo</button>
      <button className='button grande claro' onClick={jogo}>Adicionar nova palavra</button>
      
    </div>
  )
};

export default Principal;