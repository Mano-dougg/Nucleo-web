// --REACT
import { useNavigate } from 'react-router-dom';
// --CSS
import '../styles/index.css';


// -- FUNCTION
function Principal() {
  // -Geral
  const navegar = useNavigate();

  // -Botão "começar novo jogo"
  function escolha() {
    navegar('/escolha');
  }
  // -Botão "adicionar nova palavra"
  function jogo() {
    navegar('/jogo');
  }
  

  // -Return
  return (
    <section id='principal'>

      <button className='button grande' onClick={escolha}>Começar novo jogo</button>
      <button className='button grande claro' onClick={jogo}>Adicionar nova palavra</button>
      
    </section>
  );
}

export default Principal;