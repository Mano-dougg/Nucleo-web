import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header/Header.jsx';
import AboutMe from './componentes/aboutMe/AboutMe.jsx';
import MyWork from './componentes/myWork/MyWork.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <AboutMe></AboutMe>
    <MyWork></MyWork>
  </React.StrictMode>
)