import './About.css';
import Avatar from '../assets/avatar.svg';
import CheckIcon from '../assets/check-circle-solid-blue.svg';

function About() {
  return (
    <section className="about">
      <div className="avatar"></div>
      {/* <img className="avatar" src={Avatar} alt="foto do autor" /> */}

      <h1>Hello.<br />My name is Kevin.</h1>

      <hr className="about-line" />

      <p>
        I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
      </p>
      <p>
        Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
      </p>
      <p>
        I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.
      </p>

      <div className="card-work">
        <img className="checkIcon" src={CheckIcon} alt="ícone de validação" />
        <span>Available for work and general design goodness – say hello</span>
      </div>

    </section>
  );
}

export default About;