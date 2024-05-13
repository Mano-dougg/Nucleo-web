/* eslint-disable react/no-unescaped-entities */
import './Section1.css'

const Section1 = () =>{
    return(
        <>
       <section className="section1">
            <div className="section1-conteudo">
                <img src="/src/assets/img/img curriculo.PNG" alt="" />
                <h1>Hello.
                    <br />
                    My name is Eder Natan.
                </h1>
                <div className="espaco">
                    <div className="hr"></div>
                </div>
<div className="conteudo-p">
    <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
    <div className="espaco-p"></div>
    <p>Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
    <div className="espaco-p"></div>
    <p>I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos.</span></p>
    <div className="espaco-p"></div>
</div>
        </div>  
        <div className="avaliable">
            <div className="avaliable-conteudo">
                <img src="/src/assets/img/check-circle-solid-light.svg" alt="" />
                <h2>Available for work and general design goodness – say hello</h2>
            </div>
            <div className="">
                <img src="" alt="" />
            </div>
        </div>

        </section>
        </>
    )
}

export default Section1