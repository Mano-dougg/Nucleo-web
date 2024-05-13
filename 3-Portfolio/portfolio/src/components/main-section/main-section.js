import './main-section.css'

export default function MainSection(){
    return(
        <section className='section'>
            <img className='section__image'></img>
            <h1 className='section__title'>Hello. <br/>My name is Kevin.</h1>
            <br className='section__bar'/>
            <p className='section__text'>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
            <div className='section__assign'>
                <input type='checkbox' className='section__assign__button'></input>
                <span className='section__assign__text'></span>
            </div>
        </section>
    )
}