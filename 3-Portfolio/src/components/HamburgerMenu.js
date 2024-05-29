import './HamburgerMenu.css';
import HamburgerMenuLight from '../assets/hamburger-light.svg';
// import HamburgerMenuDark from '../assets/hamburger-dark.svg';

function HamburgerMenu() {
  return (
    <img className="hamburger-menu"
      src={HamburgerMenuLight}
      alt="menu hamburguer"
    />
  );
}

export default HamburgerMenu;