import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header/Header.jsx';
import AboutMe from './componentes/aboutMe/AboutMe.jsx';
import MenuMobile from './componentes/menuMobile/MenuMobile.jsx';
import MyWork from './componentes/myWork/MyWork.jsx';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    document.body.style.overflow = isMenuActive ? 'auto' : 'hidden';
  };

  return (
    <>
      <Header />
      <MenuMobile isMenuActive={isMenuActive} onToggleMenu={handleToggleMenu} />
      <AboutMe isMenuActive={isMenuActive} />
      <MyWork isMenuActive={isMenuActive}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
