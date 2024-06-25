// -- STYLES
import '../../styles/index.scss/';
// -- COMPONENTS
import Header from '../../components/Header/index.jsx/';
import Menu from '../../components/Menu/index.jsx/';
import Resumo from '../../components/Resumo/index.jsx/';
import Sobre from '../../components/Sobre/index.jsx/';
import Projetos from '../../components/Projetos/index.jsx/';


// -- FUNCTION
function PortfolioReponsivo() {

  return (
    <section id='body'>

      <Header/>
      <Menu/>

      <section id='main'>

        <Resumo/>
        <Sobre/>
        <Projetos/>

      </section>
      
    </section>
  )
};

export default PortfolioReponsivo;
