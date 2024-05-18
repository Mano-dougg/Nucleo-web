import { Header } from './components/Header.jsx'
import { Home } from './components/Home.jsx';
import { SideMenu } from './components/SideMenu.jsx';
import { useEffect, useState } from 'react';
import { ToggleMenuButton } from './components/ToggleMenuButton.jsx';
import './App.module.css'
import './global.css';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (windowWidth > 870 && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen, windowWidth]);

  return (
    <>
      <Header />
      <ToggleMenuButton menuOpen={menuOpen} handleToggleMenu={handleToggleMenu} />
      <SideMenu menuOpen={menuOpen} />
      {!menuOpen && <Home />}
    </>
  )
}

export default App
