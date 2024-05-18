import { useRef, useState, useEffect } from 'react';
import { TwitterFill, FigmaFill, InstagramFill, ThreeLineHorizontal, Cross } from 'akar-icons'
import './Hamburguer.module.css/'

function Hamburguer() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  
  return (
      <nav className="menuAberto">
        <ul className="secoesMobile">
          <li><a href='#'>Sobre</a></li>
          <li><a href='#'>Trabalhos</a></li>
        </ul>
        <ul className="redesSociaisMobile">
          <a href='https://twitter.com/' alt='Logo Twitter' target='_blank'><TwitterFill /></a>
          <a href='https://figma.com/' alt='Logo Figma' target='_blank'><FigmaFill /></a>
          <a href='https://instagram.com/' alt='Logo Instagram' target='_blank'><InstagramFill /></a>
        </ul>
      </nav>
  )
}

export default Hamburguer
