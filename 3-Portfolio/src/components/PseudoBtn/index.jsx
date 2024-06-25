// -- STYLE
import './styles.scss/';
// -- ASSETS
import checked from '../../assets/checked.svg/';

// -- FUNCTION
function PseudoBtn(props) {

  if (props.link && props.clique) {

    return (
      <div id='pseudo-btn'>

        <img src={checked} alt='icone de "check"'/>
        <p>
          {props.texto} <a href={props.link} download>{props.clique}</a>
        </p>

      </div>
    )
  } else {

    return (
      <div id='pseudo-btn'>

        <img src={checked} alt='icone de "check"'/>
        <p>
          {props.texto}
        </p>

      </div>
    )
  };  
};

export default PseudoBtn;