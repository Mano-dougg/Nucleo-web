import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import burguerMenu from '../../assets/burguer-menu.svg';
import closeMenu from '../../assets/close-menu.svg'; // Importa closeMenu
import SectionListItem from './SectionListItem';
import ListItem from './ListItem';
import twitterIcon from '../../assets/twitter-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurguerMenuClick = () => {
    setIsOpen(!isOpen);
    // Desabilita o overflow do body quando o menu está aberto
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  // Define a imagem a ser exibida com base no estado de isOpen
  const menuIcon = isOpen ? closeMenu : burguerMenu;

  const containerClass = isOpen ? 'mobile-container opened' : 'mobile-container';

  return (
    <section className={containerClass}>
      <img src={menuIcon} alt="" className='burguer-menu' onClick={handleBurguerMenuClick} />
      <nav className={`section-bar-mobile ${isOpen ? '' : 'disabled'}`}>
        <ul>
          <SectionListItem text="Section two" />
          <SectionListItem text="Section three" />
          <SectionListItem text="Section four" />
        </ul>
      </nav>
      <nav className={`social-bar-mobile ${isOpen ? '' : 'disabled'}`}>
        <ul>
          <ListItem icon={twitterIcon} alt="Twitter" />
          <ListItem icon={figmaIcon} alt="Figma" />
          <ListItem icon={instagramIcon} alt="Instagram" />
        </ul>          
      </nav>
    </section>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
