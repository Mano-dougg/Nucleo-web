import avatar from '../assets/images/Avatar.png'
import check from '../assets/images/check-circle-solid-light.svg'
import '../assets/styles/Section1.css'

function Section1() {
    return (
      <>
      <section className="container">
        <div className="Center"> 
              <img src={avatar} alt="Avatar" id='Avatar'/>
              <h1>Hello. <br /> My name is Matheus.</h1>
              <hr />
              <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
              <p>Right now, I'm Design Lead at <strong>Holiday Extras</strong>, covering all our digital platforms across a whole load of brands – leading a great team across <strong>design</strong>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
              <p>I've got some <strong>work on Dribbble</strong>, some previous work at <strong>Saga</strong> and you can find me over on twitter and sometimes <strong>on Medium too</strong>. I also take <strong>too many photos</strong>.</p>
              <section className='check'>
                <img src={check} alt="Icone" />
                <p>Available for work and general design goodness – <strong>say hello</strong></p>
              </section>
        </div>
      </section>
      </>
    );
  }

export default Section1
