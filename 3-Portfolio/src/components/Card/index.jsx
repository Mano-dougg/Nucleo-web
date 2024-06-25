// -- STYLES
import './styles.scss/';

// -- FUNCTION
function Card(props) {

  return (
    <section id='card' className={props.tipo || 'card'}>

      <img className='imagem-projeto' src={props.imagem} alt={props.desc || 'imagem do projeto'} />

      <div>
        <h4>{props.nome}</h4>
        <p>{props.texto}</p>
        <a className='button' href={props.link} target='_blank'>Mais</a>
      </div>

    </section>
  );
};

export default Card;