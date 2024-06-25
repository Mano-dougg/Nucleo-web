// -- STYLES
import './styles.scss';
// -- ASSETS
import fotoperfil from '../../assets/foto-perfil.png';

function Resumo() {

  return (
    <div id='resumo'>
          
      <img className='foto-perfil' src={fotoperfil} alt="foto de perfil"/>
      
      <section id='texto-resumo'>
          <h4>Olá, meu nome é</h4>

          <h1>Pedro Teles</h1>

          <h4>Product Manager | Front-End Developer</h4>
          <br/>
      </section>

    </div>
  );
};

export default Resumo;