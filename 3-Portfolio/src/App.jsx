import { useRef, useState, useEffect } from 'react';
import { TwitterFill, FigmaFill, InstagramFill, ToggleOff, ThreeLineHorizontal, Cross, CircleCheckFill } from 'akar-icons'
import './App.css/'
import toggleOff from './assets/toggleOff.svg/'
import toggleOn from './assets/toggleOn.svg/'
import foto3x4 from './assets/3x4.png/'
import atv1 from './assets/atv1.png/'
import atv2 from './assets/atv2.png/'
// import Hamburguer from './components/Hamburguer/'
function App() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const toggleMenu = () => {
    console.log('testando botão')
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className='body'>
      <header>
        <nav className="navbar">
          <div className="navEsquerda">
            <span className="logo">Vitor Renato</span>
            <a className='links' href='#'>Sobre</a>
            <a className='links' href='#'>Trabalhos</a>
          </div>
          <div className="navDireita">
            <a className="redesSociaisPC" href='https://twitter.com/' alt='Logo Twitter' target='_blank'><TwitterFill /></a>
            <a className="redesSociaisPC" href='https://figma.com/' alt='Logo Figma' target='_blank'><FigmaFill /></a>
            <a className="redesSociaisPC" href='https://instagram.com/' alt='Logo Instagram' target='_blank'><InstagramFill /></a>
            <div className="modoEscuro">
              <p className="textoModoEscuro">Modo Escuro:</p> 
              <button id='toggle'><img src={toggleOff} alt='botão dark mode - desligado'/></button>
            </div>
          </div>
        </nav>
        {mostrarMenu ? <button onClick={toggleMenu} className='botaoMenu'><Cross size={36} /></button> : <button onClick={toggleMenu} className='botaoMenu'><ThreeLineHorizontal size={36} /></button>}
      </header>
      <main className="main">
      <nav className={mostrarMenu ? "menuAberto" : "menuFechado"} >
        <ul className="secoesMobile">
          <li><a href='#'>Sobre</a></li>
          <li><a href='#'>Trabalhos</a></li>
        </ul>
        <ul className="redesSociaisMobile">
          <a href='https://twitter.com/' alt='Logo Twitter' target='_blank'><TwitterFill /></a>
          <a href='https://figma.com/' alt='Logo Figma' target='_blank'><FigmaFill /></a>
          <a href='https://instagram.com/' alt='Logo Instagram' target='_blank'><InstagramFill /></a>
        </ul>
      </nav> 
        <section className="intro">
          <img id="foto3x4" src={foto3x4} alt="foto 3x4" />
          <h1>Olá.<br />Meu nome é Vitor Renato.</h1>
          <div className="linha1"></div>
          <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
          Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
          I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos</span>.</p>
          <section className="checkbox">
            <CircleCheckFill className="check" />
            <p>Available for work and general design goodness – <span>say hello</span></p>        
          </section>
        </section>
        <section className="trabalhos">
          <div className="linha2"></div>
          <h2> Trabalhos</h2>
          <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
          <section className="trabalhos1" id='trabalho1'>
            <img src={atv1} className="fotosTrabalho" alt="foto trabalhos 1"/>
            <section className="textoTrabalhos">
              <h3>WeLoveDogs</h3>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button className="primaryLight">Button Primary Light</button>
            </section>
          </section>
          <section className="trabalhos1" id='trabalho2'>
            <img src={atv2} className="fotosTrabalho" alt="foto trabalhos 2"/>
            <section className="textoTrabalhos">
              <h3>PlantCard</h3>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button className="primaryLight">Button Primary Light</button>
            </section>
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
