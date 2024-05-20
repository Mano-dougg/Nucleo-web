import avatarFrame from './assets/avatar.svg'
import check from './assets/check.svg'
import './styles/section1.css'
const Section1 = () => {
    return(
        <div className='total'>
            <div className="container1">
                <img src={avatarFrame} alt="foto de avatar" className="Avatar"/>
                <h1>
                    <span className='azul'>Hello<br />My name is Kevin.</span>
                </h1>
            </div>
            <hr className="regua"/>
            <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
            <p>Right now, I'm Design Lead at <span className="azul">Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className="azul">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
            <p>I've got some<span className="azul"> work on Dribbble</span>, some previous work at <span className="azul">Saga</span> and you can find me over on twitter and sometimes <span className="azul">on Medium too</span>. I also take <span className="azul"></span>too many photos.</p>
            <div className="disclaimer">
                <img src={check} alt="check" />
                <p>Avaliable for work and general design goodness - <span className="azul">say hello</span></p>
            </div>
        </div>
    );
};
export default Section1;