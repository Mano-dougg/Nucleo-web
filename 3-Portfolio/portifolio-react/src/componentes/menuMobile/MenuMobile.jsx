import './styles.css';
import closeMenu from '../../assets-light-theme/close-menu.png';
import openMenu from '../../assets-light-theme/open-menu.png';
import closeMenuDark from '../../assets-dark-theme/close-menu.png';
import openMenuDark from '../../assets-dark-theme/open-menu.png';
import NavLinks from '../header/NavLinks.jsx'
import SocialIcons from '../header/SocialIcons.jsx'

function MenuMobile({ isMenuActive, onToggleMenu, isNightMode }) {

  const menuOpenIcon = isNightMode ? openMenuDark : openMenu;
  const menuCloseIcon = isNightMode ? closeMenuDark : closeMenu;

  return (
    <section className={`menu-mobile ${isNightMode ? 'section-night' : ''} ${isMenuActive ? 'active' : ''}`} >
      <img
        src={isMenuActive ? menuCloseIcon : menuOpenIcon}
        alt=""
        className='menu-icon'
        onClick={onToggleMenu}
      />

      <nav className={`nav-links-mobile ${isMenuActive ? '' : 'hidden'}`}>
        <NavLinks onToggleMenu={onToggleMenu}></NavLinks>
      </nav>

      <nav className={`social-icons-mobile ${isMenuActive ? '' : 'hidden'} ${isNightMode ? 'icons-night' : ''}`}>
        <SocialIcons isNightMode={isNightMode}></SocialIcons>
      </nav>


    </section>
  );
}

export default MenuMobile;

