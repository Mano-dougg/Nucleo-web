import './style.css';
import foto from '../../assets/foto.jpg';
// import burguerMenu from '../../assets/burguer-menu.svg';
// import closeMenu from '../../assets/close-menu.svg';
import available from '../../assets/available.svg';

function Presentation() {
  return (

        <>
            
            <section className="container-presentation">

                <section className="presentation">
                    <img src={foto} alt="Foto de perfil" className="foto-perfil"/>
                    <h1>Hello. <br /> My name is Arthur.</h1>
                    <hr />
                    <p>
                        I&apos;m a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. <br />
                        Right now, I&apos;m Design Lead at <em>Holiday Extras</em>, covering all our digital platforms across a whole load of brands – leading a great team across <em> design</em>, UI engineering, accessibility and customer experience. I&apos;m lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. <br />
                        I&apos;ve got some <em>work on Dribbble</em>, some previous work at <em>Saga</em> and you can find me over on twitter and sometimes <em>on Medium too.</em> I also take <em>too many photos.</em>
                    </p>
                    <section className="available">
                        <img src={available} alt="Sinal de disponível" />
                        <p>Available for work and general design goodness – <em> say hello</em></p>
                    </section>
                </section>
            </section>
        </>
        
        
  )

}

export default Presentation;
