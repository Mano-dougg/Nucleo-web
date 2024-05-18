import './styles.css';
import closeMenu from '../../assets-light-theme/close-menu.png';
import openMenu from '../../assets-light-theme/open-menu.png';
import NavLinks from '../header/NavLinks.jsx'
import SocialIcons from '../header/SocialIcons.jsx'

function MenuMobile({ isMenuActive, onToggleMenu }) {

  return (
    <section className='menu-mobile'>
      <img
        src={isMenuActive ? closeMenu : openMenu}
        alt=""
        className='menu-icon'
        onClick={onToggleMenu}
      />

      <nav className={`nav-links-mobile ${isMenuActive ? '' : 'hidden'}`}>
        <NavLinks onToggleMenu={onToggleMenu}></NavLinks>
      </nav>

      <nav className={`social-icons-mobile ${isMenuActive ? '' : 'hidden'}`}>
        <SocialIcons></SocialIcons>
      </nav>


    </section>
  );
}

export default MenuMobile;

