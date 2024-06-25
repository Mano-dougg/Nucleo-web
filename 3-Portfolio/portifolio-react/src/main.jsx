import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header/Header.jsx';
import AboutMe from './componentes/aboutMe/AboutMe.jsx';
import MenuMobile from './componentes/menuMobile/MenuMobile.jsx';
import MyWork from './componentes/myWork/MyWork.jsx';

function App() {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);

  };

  const handleToggleTheme = () => {
    setIsNightMode(!isNightMode);

    if (!isNightMode) {
      document.body.classList.add('night-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('night-mode');
      document.body.classList.add('light-mode');
    }

  };

  return (
    <>
      <Header isNightMode={isNightMode} handleToggleTheme={handleToggleTheme}/>
      <MenuMobile isMenuActive={isMenuActive} onToggleMenu={handleToggleMenu} isNightMode={isNightMode}/>
      <AboutMe isMenuActive={isMenuActive} isNightMode={isNightMode} />
      <MyWork isMenuActive={isMenuActive} isNightMode={isNightMode}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
