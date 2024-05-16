
import './App.css'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { Toggle } from "./components/toggle";
import useLocalStorage from "use-local-storage";
import fotoperfil from './img/fotoperfil.png';
import welovedogs from './img/welovedogs.png';
import plants from './img/plants.png'
import { FaCheckCircle } from "react-icons/fa";



export const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark",false);

  return (
  <>
  <div className='appe' data-theme={isDark? "dark" : "light"}>
     <header>
        <section className='menu'>
          <nav>
            <div className="one">
              <ul>
                <li><h1>Kevin Bennett</h1></li>
                <li><a href="#">Section One</a></li>
                <li><a href="#">Section Two</a></li>
                <li><a href="#">Section Three</a></li>
              </ul>
            </div>
            <div className="dois">
              <ul className="menu_itens">
                <li><a href="" target='_blank'><FaTwitter className='icone'/></a></li>
                <li><a href="" target='_blank'><FiFigma className='icone'/></a></li>
                <li><a href="" target='_blank'><FaInstagram className='icone'/></a></li>
                <li className='darkmode_name'><p>Dark Mode:</p> </li>
                <li>
                  <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </header>

    <section className='page'>
      <section className='apresentacao' >
            <img src={fotoperfil} width="250px" className='imgperfil'>
            </img>

            <h2>
              Hello. <br></br>
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
              <p>Available for work and general design goodness – <a href="#" target='_blank'>say hello</a></p>
            </div>
      </section>

            <div className='quebra_de_texto_dois'></div>

            <section className='titulo_projetos'>
              <h2>Title</h2>
              <h3>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </h3>
            </section>

            

            <section className="projeto_um">
              <div>
                <img className="projeto_img" src={welovedogs} width="600px"/>
              </div>

              <div>
                <h2>Titulo</h2>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button></button>
              </div>
            </section>

            <section className='projeto_dois'>
              <div>
                <img className="projeto_img" src={plants} width="600px"/>
              </div>

              <div>
                <h2>Titulo</h2>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button></button>
              </div>
            </section>

    </section>      


  </div>
  </>
    
  )
}

export default App
