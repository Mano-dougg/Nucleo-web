// -- REACT
import { useState } from 'react';
// -- STYLES
import './styles.scss';
// -- ASSETS
import imagem_fechado from '../../assets/hmenu-1.svg/';
import imagem_aberto from '../../assets/hmenu-2.svg/';
// -- COMPONENTS
import ILinkedin from '../Icons/ILinkedin';
import IGithub from '../Icons/IGithub';
import IInsta from '../Icons/IInsta';

// -- FUNCTION
function Menu() {
  const [icone, setIcone] = useState(imagem_fechado);
  const [hMenu, setHMenu] = useState(false);

  const hMenuToggle = () => {
    setHMenu(!hMenu);
  };

  const resetHMenu = () => {
    if (window.innerWidth > 768) {
      setHMenu(false);
  }};
  
  useEffect(() => {
    const menuHamburgerRef = document.getElementById('menu-hamburger');
    const mainRef = document.getElementById('main');
    
    setIcone(icone == imagem_fechado? imagem_aberto: imagem_fechado);
    menuHamburgerRef.classList.toggle('aberto');
    mainRef.classList.toggle('white-out');
  }, [hMenu]);

  useEffect(() => {
    window.addEventListener('resize', resetHMenu);
    resetHMenu();
    return () => {
      window.removeEventListener('resize', resetHMenu);
  };},[]);

  return (
    <div id='h-menu'>

      <button onClick={hMenuToggle}>
        <img src={icone} alt='menu hamburger' id='img-hmenu'/>
      </button>

      <section id='menu-hamburger'>

        <nav className='hmenu-1'><ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul></nav>

        <nav className='hmenu-2'><ul>
          <li>
            <ILinkedin link="https://www.linkedin.com/in/teles-pedro/" />
          </li>
          <li>
            <IGithub link="https://github.com/eusouopeu" />
          </li>
          <li>
            <IInsta link="https://www.instagram.com/eusouopeu" />
          </li>
        </ul></nav>

      </section>

    </div>
  )
};

export default Menu;