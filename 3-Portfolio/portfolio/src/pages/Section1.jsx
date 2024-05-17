import avatar from '../assets/images/Avatar.svg'
import check from '../assets/images/check-circle-solid-light.svg'
import '../assets/styles/Section1.css'

function Section1() {
    return (
      <>
        <div>
            <img src={avatar} alt="Avatar" />
            <h1>Hello. My name is Kevin.</h1>
            <hr />
            <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
            <section>
                <img src={check} alt="Icone" />
                <p>Available for work and general design goodness – say hello</p>
            </section>
        </div>
      </>
    );
  }

export default Section1
