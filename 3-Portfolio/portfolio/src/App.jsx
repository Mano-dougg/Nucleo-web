import { useState } from 'react'
import twitter from '/twitter-icon.svg'
import figma from '/figma-icon.svg'
import instagram from '/instagram-icon.svg'
import toggle from '/ToggleOff-light.svg'
import avatar from '/pink.png'
import check from '/check.svg'
import imagem1 from '/imagem1.jpg'
import imagem2 from '/imagem2.jpg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="cabeçalho">
          <div className="brand">Beatriz Rosa</div>
          <nav className="sections">
            <ul id="menu" className={menuOpen ? 'active' : ''}>
              <li><a href="">Section 1</a></li>
              <li><a href="">Section 2</a></li>
              <li><a href="">Section 3</a></li>
            </ul>
          </nav>
        </div>
        <div className="cabeçalho2">
          <nav className="socialmedia">
            <ul id="menu" className={menuOpen ? 'active' : ''}>
              <li><img src={twitter}/></li>
              <li><img src={figma}/></li>
              <li><img src={instagram}/></li>  
            </ul>
          </nav>
          <div className="toggle">
            <div className="texto1">Dark mood</div>
            <button className="botao1"><img src={toggle}/></button>
          </div>
        </div>
      </header>

      <main>
      <button id="botaomenu" onClick={toggleMenu} >menu</button>
        <div className="section1">
          <img id="avatar" src={avatar} alt="Avatar" />
          <div className="h1">
            <h1>Hello. </h1>
            <h1> My name is Beatriz Rosa.</h1>
          </div>
          <div className="divisao">______________________________________ </div>
          <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
          <p>Right now, I'm Design Lead at <span className="highlight">Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className="highlight">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
          <p>I've got some <span className="highlight">work on Dribbble</span>, some previous work at <span className="highlight">Saga</span> and you can find me over on twitter and sometimes <span className="highlight">on Medium too</span>. I also take <span className="highlight">too many photos</span>.
          </p>
          <div className="callout">
            <div className="check"><img src={check} alt="" /></div>
            <div className="texto2">Available for work and general design goodness – <span className="highlight">say hello</span></div>
          </div>
        </div>

        <div className="divisao2">_________________________________________________________________________________________________</div>

        <div className="section2">
          <h2>Title</h2>
          <div className="texto3">
            Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.
          </div>

          <div className="bloco1">
            <img id="imagem1" src={imagem1}  alt="" />
            <div className="bloquinho1">
              <h4>Title</h4>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button className="botao2">Button Primary Light</button>
            </div>
          </div>

          <div className="bloco2">
            <div className="bloquinho2">
            <h4>Title</h4>
            <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button className="botao2">Button Primary Light</button>
            </div>
            <img id="imagem2" src={imagem2} alt="" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
