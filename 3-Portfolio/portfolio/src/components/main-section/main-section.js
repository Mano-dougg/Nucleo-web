import './main-section.css';
import profile from './leorio-profile.jpg';

export default function MainSection(){
    return(
        <section className='main-section section'>
            <div className='main-section__image'>
                <img className='profile-image' src={profile} alt="A man with glasses on its nose looking straight to the screen with a cold look."></img>
            </div>    
            <h1 className='main-section__title title'>Hello. <br/>My name is Bruno Emanoel.</h1>
            <div className='main-section__bar break'/>
            <p className='main-section__text'>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. <br /><br />
            Right now, I'm Design Lead at <span className="colored">Holyday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className="colored">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. <br /><br />
            I've got some <span className="colored">work on Dribble</span>, some previous work at <span className="colored">Saga</span> and you can find me over on twitter and sometimes on <span className="colored">Medium too</span>. I also take <span className="colored">too many photos</span>.</p>
            <div className='main-section__assign'>
                <input type='checkbox' name="assign-button" id="assign-button" className='main-section__assign__button'></input>
                <label for="assing-button" className='main-section__assign__text'>Available for work and general design goodness – <span className="colored">say hello</span></label>
            </div>
        </section>
    )
}