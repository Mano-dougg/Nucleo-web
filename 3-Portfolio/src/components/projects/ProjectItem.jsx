import PropTypes from 'prop-types';

function ProjectItem(props) {
  return (
    <section className="project-item">
        <section className={props.className}>
            <img src={props.image} alt={props.alt} />
            <section className="project-text">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <button><a href={props.href} target="_blank">Veja aqui</a></button>
        </section>
        
    </section>
    </section>
    
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ProjectItem;
