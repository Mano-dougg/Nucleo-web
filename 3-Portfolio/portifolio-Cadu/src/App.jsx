import './App.css';
import React from 'react';
import { FaTwitter, FaCheckCircle, FaInstagram } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import foto from './img/fotwed.png';
import walpper from './img/pngdefundo.png';



export const App = () => {
  return (
  <>
  <div>
     <header>
        <section className='menu'>
          <nav>
            <div className="section">
              <ul>
                <li><h1>Carlos Eduardo</h1></li>
                <li><a href="#">Section One</a></li>
                <li><a href="#">Section Two</a></li>
                <li><a href="#">Section Three</a></li>
              </ul>
            </div>
            <div className="icon">
              <ul className="menu_itens">
                <li><a href=""><FaTwitter className='icone'/></a></li>
                <li><a href=""><FiFigma className='icone'/></a></li>
                <li><a href=""><FaInstagram className='icone'/></a></li>
              </ul>
            </div>
          </nav>
        </section>
      </header>

    <section className='sessaoPrincipal'>
      <section className='ConteudodaSessao' >
            <img src={foto} width="200px" className='MinhaFoto'>
            </img>

            <h2>
              Hello. <br></br>
              My Name is Carlos Eduardo
            </h2>

            <div className='Texto01'></div>
              <p>I'm a Digital Product and UI Designer - creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
              <br></br>
              <p>Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands - leading a great team across design,
              UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists - amongst others
              - testing, iterating and optimising our platforms and products.</p>
              <br></br>
              <p>I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
            <div className='say'>
              <FaCheckCircle className='icone'/>
              <p>Available for work and general design goodness - <a href="#">say hello</a></p>
            </div>
      </section>

            <div className='LinhaSepara'></div>

            <section className='titulo0001'>
              <h2 className='ide'>Title</h2>
              <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            </section>

            

            <section className="divimg">
              <div>
                <img className="img" src={walpper} width="450px"/>
              </div>

              <div>
                <h2>Title</h2>
                <br/>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button>Button Primary Light</button>
              </div>
            </section>

            <section className='divimgs'>
              <div>
                <img className="img" src={walpper} width="450px"/>
              </div>

              <div>
                <h2>Title</h2>
                <br/>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button>Button Primary Light</button>
              </div>
            </section>
    </section>      
  </div>
  </>
  )
}

export default App
