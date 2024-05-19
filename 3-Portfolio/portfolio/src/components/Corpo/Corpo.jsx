import './Corpo.css';
import veri from '../imagens/verificado.png';

function Corpo(){

    return(
        <div className="corpo">

            <div className="itens">

                <img src="https://s.aficionados.com.br/imagens/ikkifenix-0.jpg" alt="Ikki" height="50px"/>
                
                <div className="nome">
                    <h1>Olá.</h1>
                    <h1>Meu nome é João.</h1>
                </div>

                <div className="linha-1"></div>

                <div className="texto">
                    <p> I'm a Digital Product and UI Designer – creating digital experiences that are intuitive
                         for real people and making complex processes easy to use.
                    </p>

                    <p> Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a 
                    whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility 
                    and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, 
                    PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
                    </p>

                    <p> I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on 
                        twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos</span>.
                    </p>
                </div>


                <div className="work">
                    <img src={veri} alt="verificado"/>
                    <p>Available for work and general design goodness – <span>say hello</span> </p>
                </div>

            </div>

            <div className="parte-2">

            </div>

        </div>
    )

}

export default Corpo