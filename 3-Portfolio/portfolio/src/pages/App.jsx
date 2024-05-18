
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Section1 from './Section1'
import Section2 from './Section2'
import menuHamburguer from '../assets/images/dashicons_menu-light.svg'
import buttonFechar from '../assets/images/X-light-mode.svg'

function App() {
    const [mode, setMode] = useState('close');
    const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);
  
    const menuMode = () => {
      setMode(prevMode => (prevMode === 'close' ? 'open' : 'close'));
      setIsFirstDivVisible(prev => !prev); 
    };

    const handleResize = () => {
        if (window.innerWidth > 875) {
          setIsFirstDivVisible(true);
          setMode('close');
        }
      };

      useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); 
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
        <Menu />
        <div className="menu-hamburguer">
            <img
            src={mode === 'close' ? menuHamburguer : buttonFechar }
            alt="Botão Menu"
            onClick={menuMode}
            />
        </div>
        {isFirstDivVisible ? (
            <>
            <Section1 />
            <Section2 />
            </>
        ) : (
            <>
            <MenuMobile />
            </>
        )}
        </>
      );
      
}

export default App