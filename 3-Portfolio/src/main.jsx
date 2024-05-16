import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx'
import MobileMenu from './components/mobileMenu/MobileMenu.jsx'
import Presentation from './components/presentation/Presentation.jsx'
import Projects from './components/projects/Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <MobileMenu></MobileMenu>
    <Presentation></Presentation>
    <Projects></Projects>
  </React.StrictMode>
);

