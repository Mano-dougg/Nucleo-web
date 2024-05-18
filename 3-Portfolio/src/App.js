import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import './App.css';
import Header from './Header';
import Content from './Content';

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
    <div style={{ position: 'relative' }}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <button id="btn-mobile" className={isOpen ? 'open' : ''} onClick={toggleMenu}>
        <span id="hamburger"></span>
      </button>
      <div id="dropdown-menu" className={isOpen ? 'open' : ''}>
        <NavLinks />
        <SocialLinks />
      </div>
      <Content isOpen={isOpen} />
    </div>
  );
}

export default App;
