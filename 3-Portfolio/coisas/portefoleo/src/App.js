import React, { useState } from 'react';
import { AiOutlineTikTok, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import './app.css';
import cutao from './assets/cutao.png';
import culita from './assets/culita.png';
import cuk from './assets/cuk.png';
import xis from './assets/xis.png';
import cunu from './assets/cunu.png';
import Post from './components/Post'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickMenu = (event) => {
    event.preventDefault();
    setMenuOpen(true);
  };

  const clickXis = (event) => {
    event.preventDefault();
    setMenuOpen(false);
  };

  return (
    <div className='body'>
      <div className="header">
        <div className="headerleft">
          <div className="homename">
            <a href=".header">Talita Ester</a>
          </div>
          <div className="sections">
            <a href="">section two</a>
            <a href="">section three</a>
            <a href="">section four</a>
          </div>
        </div>
        <div className="headerright">
          <div className="redes">
            <a href=""><AiOutlineTwitter size={22} color="#7400b2" /></a>
            <a href=""><AiOutlineInstagram size={22} color="#7400b2" /></a>
            <a href=""><AiOutlineTikTok size={22} color="#7400b2" /></a>
          </div>
          <div className="darkmode">
            <p>Dark mode:</p>
            <a href=""><img src={cutao} alt="cutao" className="cutao" width="40" height="22" /></a>
          </div>
        </div>
      </div>
      <div className="main">
        {!menuOpen && (
          <a onClick={clickMenu} className="cunu" id="cunu" href="#"><img src={cunu} className="botaox" width="30" height="30" alt="menu" /></a>
        )}
        {menuOpen && (
          <div className="hamdiv" id="hamdiv">
            <div className="hamburger">
              <a onClick={clickXis} href="#" className="xis"><img src={xis} className="botaox" width="30" height="30" alt="close" /></a>
              <div className="sectionsham">
                <a href="#">section two</a>
                <a href="#">section three</a>
                <a href="#">section four</a>
              </div>
              <div className="redesham">
                <a href="#"><AiOutlineTwitter size={22} color="#7400b2" /></a>
                <a href="#"><AiOutlineInstagram size={22} color="#7400b2" /></a>
                <a href="#"><AiOutlineTikTok size={22} color="#7400b2" /></a>
              </div>
            </div>
          </div>
        )}
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
            <img src={cuk} className="cula" width="16" height="16" alt="Available for work" />
            <p className="ava">Available for work and general design goodness <span style={{ color: '#7400b2' }}>- say hello</span></p>
          </div>
        </div>
        <div className='linha2'></div>
        <div className='posts'>
          
          <h1 style={{paddingBottom: '5px'}}>Remarkables</h1>
          <p style={{fontSize: '17px'} }> Section to tell you about me and the thins i've done in the name of computer science!</p>
          <Post
          title="Getting into UFBA"
          content="I have loved technology since i was little, because of my father and my brother, but my real jouney started in 2022 when i decided to graduate in CS.
                  The University Federal of Bahia was my first option ever and i was afraid i couldn't get into it, but everything happend he right way
                  today i'm two years into my graduation and never been so happy with my choices"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
