import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx'
import Presentation from './components/presentation/Presentation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Presentation></Presentation>
  </React.StrictMode>
);

