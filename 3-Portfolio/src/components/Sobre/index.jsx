// -- STYLES
import './styles.scss';
// -- ASSETS
import checked from '../../assets/checked.svg';
import curriculo from '../../assets/Curriculo-PedroTeles.pdf'
// -- COMPONENTS
import PseudoBtn from '../../components/PseudoBtn/index';

// -- FUNCTION
function Sobre() {

  return (
    <div id='sobre'>

      <hr/>

      <div>
        <p>
          Graduando de Administração e cofundador da Liga Acadêmica Transdisciplinar de Tecnologia e Inovação (LATTI) da UFBA. Possuo experiência ministrando oficinas introdutórias de UX Research, Figma e Desenvolvimento Front-End (HTML, CSS e JavaScript). Além das áreas acima, também me interesso e pesquiso sobre temas como Gamificação e Economia Solidária.
        </p>
      </div>

      <PseudoBtn texto='Baixe aqui o meu ' link={curriculo} clique='curriculo em PDF' />

    </div>
  );
};

export default Sobre;