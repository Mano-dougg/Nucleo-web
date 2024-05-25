// --REACT
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.css';


// -- FUNCTION
function Principal(): JSX.Element {
  // -Geral
  const navegar = useNavigate();

  // -Botão "começar novo jogo"
  const escolha = (): void => {
    navegar('/escolha');
  };
  // -Botão "adicionar nova palavra"
  const jogo = (): void => {
    navegar('/escolha');
  };
  
  // -Return
  return (
    <div id='principal'>

      <button className='button grande' onClick={escolha}>Começar novo jogo</button>
      <button className='button grande claro' onClick={jogo}>Adicionar nova palavra</button>
      
    </div>
  )
};

export default Principal;