// -- REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
// -- STYLES
import '../src/styles/index.scss/';
// -- COMPONENTS
import PortfolioResponsivo from './views/Main/PortfolioResponsivo.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioResponsivo />
  </React.StrictMode>,
);
