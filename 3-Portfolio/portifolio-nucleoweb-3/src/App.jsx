import { useState } from 'react'
import tt from './assets/tt.svg'
import figma from './assets/figma.svg'
import insta from './assets/insta.svg'
import moon from './assets/moon.svg'
import sol from './assets/sol.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header>
        <section className='menu'>
          <nav>
            <div className="one">
              <ul>
                <li><h2>Kevin Bennett</h2></li>
                <li><a href="#">Section One</a></li>
                <li><a href="#">Section Two</a></li>
                <li><a href="#">Section Three</a></li>
              </ul>
            </div>
            <div className="dois">
              <ul className="menu_itens">
                <li><a href="" target='_blank'><img src={tt} width="" height="" /></a></li>
                <li><a href="" target='_blank'><img src={figma} width="" height="" /></a></li>
                <li><a href="" target='_blank'><img src={insta} width="" height="" /></a></li>
                <li className='darkmode_name'><p>Dark Mode:</p> </li>
                <li><input type="checkbox" className="checkbox" id="chk"/></li>
                <li> <label className="label" for="chk">
                  <img src={sol}/>
                  <img src={sol}/>
                  <div className='ball'></div>
                </label></li>
              
              </ul>
            </div>
          </nav>
        </section>
      </header>

      <section className='apresentacao'>

        <img>
        </img>

        <h1>
          Hello. <br></br>
          My Name is Kevin.
        </h1>

        <div className='quebra_de_texto'></div>

        <p>
          I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. <br/><br/>
          Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. <br/><br/>
          I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.<br/><br/>
        </p>

        <div>
          <p><img />Available for work and general design goodness – <a href="#" target='_blank'>say hello</a></p>
        </div>
      </section>

      <div className='quebra_de_texto'></div>

      <section>
        <h1>Title</h1>
        <h3>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </h3>
      </section>

      <section>
        <div>
          <img />
        </div>

        <div>
          <h1>Titulo</h1>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button></button>
        </div>
      </section>

      <section>
        <div>
          <img />
        </div>

        <div>
          <h1>Titulo</h1>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button></button>
        </div>
      </section>
    </>


  )
}

export default App
