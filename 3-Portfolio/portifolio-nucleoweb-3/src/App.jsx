
import './App.css'
import React, { useState } from 'react'
import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { Toggle } from "./components/toggle";
import useLocalStorage from "use-local-storage";
import fotoperfil from './img/fotoperfil.png';
import welovedogs from './img/welovedogs.png';
import plants from './img/plants.png'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";



export const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark",false);
  function showMenu(){
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else{
      menuMobile.classList.add('open');
    }
  
  }

  return (
  <>
  <div className='appe' data-theme={isDark? "dark" : "light"}>
     <header>
        <section className='menu'>
          <nav>
            <div className='mobile_menu_icon' onClick={showMenu}><IoMdMenu className="icon_burguer" size={'34px'} />
            </div>
            <li className='logo'><h1>Paloma Brito</h1></li>
              <ul class="ul_um">
                <li><a href="#apresentacao">About</a></li>
                <li><a href="#projeto_um">Projeto I</a></li>
                <li><a href="#projeto_dois">Projeto II</a></li>
                </ul>
              <ul class="ul_dois">
                <li><a href="https://x.com" target='_blank'><FaTwitter className='icone'/></a></li>
                <li><a href="https://figma.com" target='_blank'><IoLogoFigma className='icone'/></a></li>
                <li><a href="https://www.facebook.com" target='_blank'><FaInstagram className='icone'/></a></li>
                <li className='darkmode_name'><p>Dark Mode:</p> </li>
                </ul>
                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
          </nav>


            <div className="menu_mobile">
              <div>
              <ul>
                <li className='nav-item'><a href="#apresentacao">Section One</a></li>
                <li className='nav-item'><a href="#projeto_um">Section Two</a></li>
                <li className='nav-item'><a href="#projeto_dois">Section Three</a></li>
              </ul>
              </div>
              <div className='ul_horizontal'>
                <ul>
                <li className='nav-item_um'><a href="https://x.com" target='_blank'><FaTwitter className='icone'/></a></li>
                <li className='nav-item_um'><a href="https://figma.com" target='_blank'><IoLogoFigma className='icone'/></a></li>
                <li className='nav-item_um'><a href="https://www.facebook.com" target='_blank'><FaInstagram className='icone'/></a></li>
                </ul>
                </div>
              </div>

        </section>
      </header>

    <section className='page' id="apresentacao">
      <section className='apresentacao' >
            <img src={fotoperfil} width="250px" className='imgperfil'>
            </img>

            <h2>
              Hello! <br></br>
              My Name is Paloma :)
            </h2>

            <div className='quebra_de_texto_um'></div>

            <p>
              I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. <br/><br/>
              Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. <br/><br/>
              I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.<br/><br/>
            </p>

            <div className='available'>
              <FaCheckCircle className='icone'/>
              <p>Available for work and general design goodness – <a href="https://github.com/" target='_blank'>say hello.</a></p>
            </div>
      </section>

            <div className='quebra_de_texto_dois'></div>

            <section className='titulo_projetos'>
              <h3>Projetos</h3>
              <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            </section>

            

            <section className="projeto_um" id="projeto_um">
              <div>
                <img className="projeto_img" src={welovedogs} width="600px"/>
              </div>

              <div className='aaaa'>
                <h4>We Love Dogs</h4>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button className='projeto_botao'>Show Demo</button>
              </div>
            </section>

            <section className='projeto_dois' id="projeto_dois">
              <div>
                <img className="projeto_img" src={plants} width="600px"/>
              </div>

              <div>
                <h4>Plant Card</h4>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button className='projeto_botao'>Show Demo</button>
              </div>
            </section>

    </section>      


  </div>
  </>
    
  )
  
}

export default App
