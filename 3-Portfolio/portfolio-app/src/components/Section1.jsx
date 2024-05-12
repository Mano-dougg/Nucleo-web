import avatar from '../assets/img/avatar.svg'
import check from '../assets/img/check.svg'
import './section1.css'

function Section1() {

    return (
        <>
            <section className="main-content">
                <div className="apresentation">
                    <div className="avatar-img">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h1>Hello. <br /> My name is Kevin</h1>
                    <span className='small-line'></span>
                </div>
                <article>
                    <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
                    <p>Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
                    <p>I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
                </article>
                <div className="callout">
                    <img src={check} alt="emoji de check" />
                    <p>Available for work and general design goodness – <a href="">say hello</a></p>
                </div>
                <span className='full-line'></span>
            </section>
        </>
    )
}

export default Section1;