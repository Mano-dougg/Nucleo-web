// import React, { useState } from 'react';
import './HamburgerMenu.css';
import HamburgerMenuIcon from '../assets/hamburger-menu-light.svg';
import CloseMenu from '../assets/close-menu-light.svg';

const HamburgerMenu = ({ isOpen, openMenu }) => {
  
  const displayHamburguerMenu = () => {
    openMenu(!isOpen);
  }

  return (
    <div className={`hamburger-menu ${isOpen ? "toggled" : ""}`}>
      <img className="hamburger-menu-icon"
        src={ !isOpen ? HamburgerMenuIcon : CloseMenu }
        alt="menu hamburguer"
        onClick={ displayHamburguerMenu }
      />
    </div>
  );
};

export default HamburgerMenu;