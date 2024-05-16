import './App.css'
import './App_mobile.css'
import Logotwitter from "./imagens-redes-sociais/twitter-icon.png"
import Logofigma from "./imagens-redes-sociais/figma-icon.png"
import Logoinsta from "./imagens-redes-sociais/instagram-icon.png"
import imagemRosto from "./rosto/imagem-rosto.jpeg"
import webDesign1 from "./imagens-design/imagem-web-design.jpg"
import webDesign2 from "./imagens-design/imagem-web-design2.jpg"
import Check from "./check-circles/check-image.png"

function App() {
  return (
    <>
      <div className="nav-container">
        <div className="autor-mobile">
          Samuel Almeida
        </div>
        <div className="toggle-buttom-mobile">
          <p> Dark mode:</p> 
          <label className='switch'>
            <input type="checkbox" />
            <span className='slider'/>
          </label>
        </div>

        <div className="left-align">
          <nav>
            <div className="autor">
              Samuel Almeida
            </div>
              
            <ul className='sections'>
              <li>
                <a href="#">Section two</a>
              </li>

              <li>
                <a href="#">Section three</a>
              </li>

              <li>
                <a href="#">Section four</a>
              </li>
            </ul> 
          </nav>
        </div>

        <div className="right-align">
          <nav>
            <ul className="social-icons">
              <li>
                  <a href="#">
                     <img src={Logotwitter} alt="imagem twitter" />
                  </a>
              </li>

              <li>
                  <a href="#">
                     <img src={Logofigma} alt="imagem twitter" />
                  </a>
              </li>

              <li>
                  <a href="#">
                     <img src={Logoinsta} alt="imagem twitter" />
                  </a>
              </li>
            </ul>
            
            <div className="toggle-buttom">
              <p> Dark mode:</p> 
              <label className='switch'>
                <input type="checkbox" />
                <span className='slider'/>
              </label>
            </div>
          </nav>
        </div>
      </div>

      <div className="main-container">
        <button id="btn-mobile">Menu</button>
        <div className="left-align-mobile">
          <nav>
            <ul className='sections'>
              <li>
                <a href="#">Section two</a>
              </li>

              <li>
                <a href="#">Section three</a>
              </li>

              <li>
                <a href="#">Section four</a>
              </li>
            </ul> 
          </nav>
        </div>

        <div className="right-align-mobile">
          <nav>
            <ul className="social-icons">
              <li>
                  <a href="#">
                     <img src={Logotwitter} alt="imagem twitter" />
                  </a>
              </li>

              <li>
                  <a href="#">
                     <img src={Logofigma} alt="imagem twitter" />
                  </a>
              </li>

              <li>
                  <a href="#">
                     <img src={Logoinsta} alt="imagem twitter" />
                  </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="section1">      
          <img src={imagemRosto} alt="imagem-do-perfil" />
        
          <h1>Hello. My name is Samuel.</h1>
          <div className="parte1"> 
            
          </div>
         
          <div className="paragrafo1">
            <p>
              I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making 
              complex processes easy to use.
            </p>
          </div>  
          <div className="paragrafo2">
            <p> 
              Right now, I'm Design Lead at <a href="#">Holiday Extras</a> , covering all our digital platforms across a whole load of brands – leading
              a great team across <a href="#">design</a> , UI engineering, accessibility and customer experience. I'm lucky to be part of a great 
              team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating 
              and optimising our platforms and products.
            </p> 
            <div className="paragrafo3">
              <p>
                I've got some <a href="#">work on Dribbble</a>, some previous work at <a href="#">Saga</a> and you can find me over on twitter and sometimes <a href="#">on Medium too</a> 
                .I also take <a href="#">too many photos</a>.
              </p>
            </div>
          </div>  

          <section>
            <img src={Check} alt="check-image" />
            <div className="paragrafo4">
              <p>Available for work and general design goodness – <a href="#">say hello</a></p>
            </div>
          </section>

        </div>
        <div className="section2">
          <div className="titulo-paragrafo">
            <h1>Title</h1>
            <p>
              Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here 
              to decribe this section. Line of copy in here to decribe this section. 
            </p>
          </div>

          <div className="imagem-texto1">
            <img src={webDesign1} alt="imagem-exemplo-web" />
            <div className="minitexto">
              <h2>Title</h2>
              <p>
                Leading, implementing 
                and evolving engaging customer 
                experiences and UI foundations 
                for every touch-point across 
                various platforms.
              </p>
              <button name="enviar" value="1" type="submit">Button Primary Light</button>
            </div>  
          </div>

          <div className="imagem-texto2">
            <img src={webDesign2} alt="imagem-exemplo-web" />
            <div className="minitexto2">
              <h3>Title</h3>
              <p>
                Leading, implementing 
                and evolving engaging customer 
                experiences and UI foundations 
                for every touch-point across 
                various platforms.
              </p>
              <button name="enviar" value="1" type="submit">Button Primary Light</button>
            </div> 
          </div>

        </div>
      </div>  
    </>
  );
}

export default App
