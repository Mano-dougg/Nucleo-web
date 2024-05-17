import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 660 && isOpen) {
        setIsOpen(false);
      }
    }
  
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <header>
        <nav id="nav-bar">
          <div id="left-aligned">
            <h4 id="logo">Kevin Bennet</h4>
            <NavLinks />
          </div>
          <div id="right-aligned">
            <SocialLinks />
            <div id="toggle">
              <label id="mode">Dark mode:</label>
              <input type="checkbox" id="check" onChange={toggleDarkMode} />
              <label htmlFor="check" className="button" />
            </div>
          </div>
        </nav>
      </header>
      <div id="menu-container">
        <button id="btn-mobile" className={isOpen ? 'open' : ''} onClick={toggleMenu}>
          <span id="hamburger"></span>
        </button>
        <div id="dropdown-menu" className={isOpen ? 'open' : ''}>
          <NavLinks />
          <SocialLinks />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
