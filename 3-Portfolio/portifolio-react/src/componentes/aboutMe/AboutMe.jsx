import './styles.css';
import avatar from '../../assets-light-theme/Avatar.png';
import checkCircle  from '../../assets-light-theme/check-circle.png'

function AboutMe({ isMenuActive }) {

    return (
        <section className={`section1 ${isMenuActive ? 'hidden' : ''}`}>

            <img className="avatar" src={avatar}/>
            <h1> Hello. <br/>My name is Beatriz. </h1>

            <div className='line'></div>

            <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. 
                <br/><br/>
                Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, 
                UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. 
                <br/><br/>
                I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on 
                Medium too.</span> I also take <span>too many photos.</span>
            </p>

            <div className='call-out'>
                <img src={checkCircle}/> 
                <p>Available for work and general design goodness – <span> say hello</span></p>
            </div>

        </section>
    );
}

export default AboutMe;