import React, { useState, useEffect } from 'react';
import { BsXLg, BsList } from "react-icons/bs";
import { BiSolidCheckCircle } from "react-icons/bi";
import { AiOutlineTikTok, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import './app.css';
import cutao from './assets/cutao.png';
import culita from './assets/culita.png';
import cuk from './assets/cuk.png';
import Post from './components/Post';
import webmedia from './assets/webmedia.png';
import ufba from './assets/cufba.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const clickMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`body ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <div className="headerleft">
          <div className="homename">
            <a href=".header" className="hover-text" >Talita Ester</a>
          </div>
          <div className="sections">
            <a href="#">section two</a>
            <a href="#">section three</a>
            <a href="#">section four</a>
          </div>
        </div>
        <div className="headerright">
          <div className="redes">
            <a href="#"><AiOutlineTwitter size={22} style={{ color: 'var(--corprincipal)' }} /></a>
            <a href="#"><AiOutlineInstagram size={22} style={{ color: 'var(--corprincipal)' }} /></a>
            <a href="#"><AiOutlineTikTok size={22} style={{ color: 'var(--corprincipal)' }} /></a>
          </div>
          <div className="darkmode">
            <p><span style={{ color: 'var(--text-color)' }}>Dark mode:</span> </p>
            <div onClick={toggleDarkMode} className={`toggle-button ${darkMode ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
      <div className="main">
        {menuOpen && (
          <div className="hamdiv" id="hamdiv">
            <div className="hamburger">
              <a onClick={clickMenu} href="#" className="xis"><BsXLg className="botaox" size={30} style={{ color: 'var(--corprincipal)' }} alt="close" /></a>
              <div className="sectionsham">
                <a href="#">section two</a>
                <a href="#">section three</a>
                <a href="#">section four</a>
              </div>
              <div className="redesham">
                <a href="#"><AiOutlineTwitter size={22} style={{ color: 'var(--corprincipal)' }} /></a>
                <a href="#"><AiOutlineInstagram size={22} style={{ color: 'var(--corprincipal)' }} /></a>
                <a href="#"><AiOutlineTikTok size={22} style={{ color: 'var(--corprincipal)' }} /></a>
              </div>
            </div>
          </div>
        )}
        {!menuOpen && (
          <a onClick={clickMenu} className="cunu" id="cunu" href="#"><BsList className="botaox" size={30} style={{ color: 'var(--corprincipal)' }} alt="menu" /></a>
        )}

        {!menuOpen && (
          <div>
            <div className="presentation">
              <img src={culita} className="cula" width="100" height="100" alt="Talita Ester" />
              <p className="hello">Hello,</p>
              <p className="name">My name is Talita Ester!!</p>
              <div className="linha"></div>
              <div className="bio">
                <p className="texto">I'm a Digital Product and UI Designer creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
                <p className="texto">Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
                <p className="texto">I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
              </div>
              <div className="work">
                < BiSolidCheckCircle className="cula" size={30} color='var(--corprincipal)' alt="Available for work" />
                <p className="ava"><span style={{ color: 'var(--text-color)' }}>Available for work and general design goodness</span> <span style={{ color: 'var(--corprincipal)' }}>- say hello</span></p>
              </div>
            </div>
            <div className='linha2'></div>
            <div className='posts'>
              <h1 style={{ paddingBottom: '5px' }}>Remarkables</h1>
              <p style={{ fontSize: '17px' }}> Section to tell you about me and the things i've done in the name of computer science!</p>
              <Post
                image={ufba}
                title="Getting into UFBA"
                content="I have loved technology since i was little, because of my father and my brother, but my real jouney started in 2022 when i decided to graduate in CS. The University Federal of Bahia was my first option ever and i was afraid i couldn't get into it, but everything happend he right way today i'm two years into my graduation and never been so happy with my choices"
              />
              <Post
                image={webmedia}
                title="scientific research"
                content="In my first semester at UFBA, i got into a research project where i learned an infinity of things about programming and science in general. My project was about a mobility model for the objects of the internet of things, based on a already existent model: the SWIM. The model was well accepted and the results of the research was publicated by the WebMedia2023"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
