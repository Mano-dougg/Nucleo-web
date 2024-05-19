import './App.css';
import checkCircle from './assets/check-circle-solid-light.png';
import frankocean from './assets/frankocean.png';
import imagePost1 from './assets/code-stockphoto.png';
import imagePost2 from './assets/code-stockphoto2.png';
import menuIcon from './assets/menu.png';
import menuIconClose from './assets/menuclose.png';

import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { useState, useRef } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  const SectionHome = useRef(null);
  const Section2 = useRef(null);
  const Section3 = useRef(null);
  const Section4 = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  function darkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth'});
    setTimeout(setToggle(false), 4000);
  }

  return (
    <div className={isDarkMode ? "dark-mode" : "App"}>
      <div className="container">
        <nav className="nav">
          <section className="navleft">
            <h4 onClick={() => scrollToSection(SectionHome)} className="brand">Maurício Matchal</h4>
            <div className="labels">
              <li onClick={() => scrollToSection(Section2)} href="" className='label'>Section two</li>
              <li onClick={() => scrollToSection(Section3)} href="" className='label'>Section three</li>
              <li onClick={() => scrollToSection(Section4)} href="" className='label'>Section four</li>
            </div>
          </section>
          <section className="navright">
            <ul className="social-icons">
              <li className='icon-item'><FaTwitter className="Icon" size={22} /></li>
              <li className='icon-item'><IoLogoFigma className="Icon" size={22} /></li>
              <li className='icon-item'><FiInstagram className="Icon" size={22} /></li>
            </ul>
            <label className="switch">
              <input type="checkbox" checked={isDarkMode} onChange={darkMode} />
              <span className="slider"></span>
            </label>
          </section>
        </nav>
        <main className="main">
          <button onClick={() => setToggle(!toggle)} className="menu-button">
            <img className={`menu-icon ${toggle ? 'menu-icon-hide' : 'menu-icon'}`} src={menuIcon} alt="menu icon" />
            <img className={`menu-icon-close-hide ${toggle ? 'menu-icon-close' : 'menu-icon-close-hide'}`} src={menuIconClose} alt="close icon" />
          </button>
          <nav className={`menu ${toggle ? 'menu-show' : 'menu'}`}>
            <li onClick={() => scrollToSection(Section2)} href="" className="label">Section two</li>
            <li onClick={() => scrollToSection(Section3)} href="" className="label">Section three</li>
            <li onClick={() => scrollToSection(Section4)} href="" className="label">Section four</li>
            <div className="menu-social-icons">
              <li className='icon-item'><FaTwitter className="Icon" size={22} /></li>
              <li className='icon-item'><IoLogoFigma className="Icon" size={22} /></li>
              <li className='icon-item'><FiInstagram className="Icon" size={22} /></li>
            </div>
          </nav>
          <section className={`scrollview ${toggle ? 'scrollview-hide' : 'scrollview'}`}>
            <div className="section1" ref={SectionHome}>
              <img id="avatar" src={frankocean} alt="portfolio picture"></img>
              <h1 className='accent-color'>Hello.<br />
                My name is Maurício.</h1>
            </div>

            <div className="dividerplaceholder">
              <div role="divider" className="divider-s" ref={Section2}></div>
            </div>

            <div className="section2">
              <p className="portfolio-description">
                I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.<br /><br /> Right now, I'm Design Lead at <strong className="highlight">Holiday Extras</strong>, covering all our digital platforms across a whole load of brands – leading a great team across <strong className="highlight">design</strong>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.<br /><br /> I've got some <strong className="highlight">work on Dribble</strong>, some previous work at <strong className="highlight">Saga</strong> and you can find me over on twitter and sometimes <strong class="highlight">on Medium too</strong>. I also take <strong className="highlight">too many photos</strong>.
              </p>
              <span className="callout">
                <img src={checkCircle} alt="check icon"></img>
                <p className="callout-text">Available for work and general design goodness – <strong className="highlight">say hello</strong></p>
              </span>
            </div>

            <div role="divider" className="divider-l" ref={Section3}></div>

            <div className="section3">
              <h2 className='accent-color'>Title</h2>
              <p className="portfolio-description" ref={Section4}>
                Line of copy in here to describe this section. Line of copy in here to describe this section. Line of copy in here to describe this section. Line of copy in here to describe this section.
              </p>
              <div className='post'>
                <img src={imagePost1} alt="stock photo of a monitor with code" className="post-image" />
                <div className="post-content">
                  <h3 className='accent-color'>Title</h3>
                  <p className='post-description'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                  <button className='button-primary'>Button Primary Light</button>
                </div>
              </div>
              <section className='post' id='last-post'>
                <div className="post-content">
                  <h3 className='accent-color'>Title</h3>
                  <p className='post-description'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                  <button className='button-primary'>Button Primary Light</button>
                </div>
                <img src={imagePost2} alt="stock photo of a monitor with code" className="post-image" />
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
