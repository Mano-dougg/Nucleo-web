import './Header.css';
import ToggleButton from './ToggleButton';
import Twitter from '../assets/twitter-icon.svg';
import Figma from '../assets/figma-icon.svg';
import Instagram from '../assets/instagram-icon.svg';

function Header() {
  return (
    <header className="header-bar" data-theme="dark">
      <div className="logo-sections">
        <h1 className="logo">Kevin Bennett</h1>

        <nav className="nav-sections">
          <ul className="sections">
            <li className="section-item"><a href="">Section two</a></li>
            <li className="section-item"><a href="">Section three</a></li>
            <li className="section-item"><a href="">Section four</a></li>
          </ul>
        </nav>
      </div>

      <div className="social-darkmode">
        <nav className="nav-socialmedia">
          <ul className="socialmedia">
            <li className="socialmedia-item">
              <a href="#"><img src={Twitter} alt="Twitter" /></a>
            </li>
            <li className="socialmedia-item">
              <a href="#"><img src={Figma} alt="Figma" /></a>
            </li>
            <li className="socialmedia-item">
              <a href="#"><img src={Instagram} alt="Instagram" /></a>
            </li>
          </ul>
        </nav>

        
          <ToggleButton />
      </div>
    </header>
  );
}

export default Header;