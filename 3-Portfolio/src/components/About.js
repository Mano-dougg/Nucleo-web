import './About.css';
import Avatar from '../assets/avatar.svg';
import CheckIcon from '../assets/check-circle-solid-blue.svg';

function About() {
  return (
    <section className="about">
      <div className="avatar"></div>

      <h1 className="about-title">Hello.<br />My name is Kevin.</h1>

      <div className="about-line"></div>

      <div className="about-paragraphs">
        <p>
          I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
        </p>
        <p>
          Right now, I'm Design Lead at <span className="blue-text">Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className="blue-text">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
        </p>
        <p>
          I've got some <span className="blue-text">work on Dribbble</span>, some previous work at <span className="blue-text">Saga</span> and you can find me over on twitter and sometimes <span className="blue-text">on Medium too</span>. I also take <span className="blue-text">too many photos</span>.
        </p>
      </div>

      <div className="card-work">
        <img className="checkIcon" src={CheckIcon} alt="ícone de validação" />
        <p className="card-work-text">Available for work and general design goodness – <span className="blue-text">say hello</span></p>
      </div>

    </section>
  );
}

export default About;