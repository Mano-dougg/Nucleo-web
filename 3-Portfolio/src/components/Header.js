import React, { useState } from 'react';
import './Header.css';
import DarkmodeButton from './DarkmodeButton';
import HamburgerMenu from './HamburgerMenu';
import Twitter from '../assets/twitter-icon-light.svg';
import Figma from '../assets/figma-icon-light.svg';
import Instagram from '../assets/instagram-icon-light.svg';

function Header() {
  const [isOpen, openMenu] = useState(false);

  return (
    <header className="header-bar">
      <div className="logo-sections">
        <h1 className="logo">Kevin Bennett</h1>

        <nav className="nav-sections">
          <ul className="sections">
            <li className="section-item"><a href="./">Section two</a></li>
            <li className="section-item"><a href="./">Section three</a></li>
            <li className="section-item"><a href="./">Section four</a></li>
          </ul>
        </nav>
      </div>

      <div className="social-darkmode">
        <nav className="nav-socialmedia">
          <ul className="socialmedia">
            <li className="socialmedia-item">
              <a href="./"><img className="twitter-icon" src={Twitter} alt="Twitter" /></a>
            </li>
            <li className="socialmedia-item">
              <a href="./"><img className="figma-icon" src={Figma} alt="Figma" /></a>
            </li>
            <li className="socialmedia-item">
              <a href="./"><img className="instagram-icon" src={Instagram} alt="Instagram" /></a>
            </li>
          </ul>
        </nav>
        
        <DarkmodeButton />
      </div>

      <HamburgerMenu isOpen={isOpen} openMenu={openMenu} />
      <div className={`hamburguer-menu-display ${isOpen ? "toggled" : ""}`}>
        <nav className="nav-sections">
          <ul className="sections">
            <li className="section-item"><a href="./">Section two</a></li>
            <li className="section-item"><a href="./">Section three</a></li>
            <li className="section-item"><a href="./">Section four</a></li>
          </ul>
        </nav>

        <nav className="nav-socialmedia">
          <ul className="socialmedia">
            <li className="socialmedia-item">
              <a href="./"><img className="twitter-icon" src={Twitter} alt="Twitter" /></a>
            </li>
            <li className="socialmedia-item">
              <a href="./"><img className="figma-icon" src={Figma} alt="Figma" /></a>
            </li>
            <li className="socialmedia-item">
              <a href="./"><img className="instagram-icon" src={Instagram} alt="Instagram" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;