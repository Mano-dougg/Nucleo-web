import { useContext, useState } from 'react'
import ThemeContext from '../../context/ThemeContext';
import ResponsiveContext from '../../context/ResponsiveContext';
import "./navBar.css"
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import MenuIcon from './MenuIcon';

const NavBar: React.FC = () => {
  const { isDarkThemed, toggleTheme, darkClassName } = useContext(ThemeContext);
  const { isMobile } = useContext(ResponsiveContext)
  const [ isMenuOpen, toggleMenu ] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { currentTarget } = event
    if (currentTarget instanceof HTMLElement) {
      const target = currentTarget.id.split("-")[ 0 ]
      switch (target) {
        case "menu":
          toggleMenu(!isMenuOpen)
          break;
        case "theme":
          toggleTheme()
          break;
        default:
          console.error("Click event failed");
          break;
      }
    }
  }

  return (
    <div>
      <nav className={`${darkClassName}`}>
        <div className="left-aligned">
          <div id="nav-brand"><span className="be-vietnam-pro-bold">Kevin Bennett</span></div>
          {!isMobile && (
            <ul className="nav-links be-vietnam-pro-regular">
              <NavLinks />
            </ul>
          )}
        </div>
        <div className="right-aligned">
          {!isMobile && (
            <ul className="social-icons">
              <SocialIcons />
            </ul>
          )}
          <div className="toggleTheme">
            <span className="be-vietnam-pro-regular">Dark mode:</span>
            <div>
              <button id="theme-switch" type="button" aria-label="Toggle theme" onClick={handleClick}>
                <svg id="switch-box" xmlns="http://www.w3.org/2000/svg" width="40" height="22" viewBox="0 0 40 22" fill="none">
                  <path d="M10.9804 0.5H29.0196C34.8069 0.5 39.5 5.20017 39.5 11C39.5 16.7998 34.8069 21.5 29.0196 21.5H10.9804C5.19307 21.5 0.5 16.7998 0.5 11C0.5 5.20017 5.19307 0.5 10.9804 0.5Z" fill={isDarkThemed ? "#FAF4E6" : "white"} stroke={isDarkThemed ? "#222222" : "#3C3B3A"} />
                  <path d="M29.0196 0.392853H10.9804C5.13267 0.392853 0.392151 5.14183 0.392151 11C0.392151 16.8582 5.13267 21.6071 10.9804 21.6071H29.0196C34.8673 21.6071 39.6078 16.8582 39.6078 11C39.6078 5.14183 34.8673 0.392853 29.0196 0.392853Z" fill={isDarkThemed ? "#FAF4E6" : "#E5E5E5"} stroke={isDarkThemed ? "#222222" : "#3C3B3A"} />
                </svg>
                <svg className={darkClassName} id="switch-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M8.62745 17.6429C13.3923 17.6429 17.2549 13.7733 17.2549 9C17.2549 4.22669 13.3923 0.357147 8.62745 0.357147C3.86264 0.357147 0 4.22669 0 9C0 13.7733 3.86264 17.6429 8.62745 17.6429Z" fill="#3C3B3A" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobile && (
        <>
          <button id="menu-switch" type="button" aria-label="Toggle menu" onClick={handleClick}>
            <MenuIcon isMenuOpen={isMenuOpen} isDarkThemed={isDarkThemed} />
          </button>
          {isMenuOpen && (
            <div className={`mobile-menu ${darkClassName}`}>
              <ul className="mobile-nav-links be-vietnam-pro-regular" id="mobile-items">
                <NavLinks onToggle={() => toggleMenu(false)} />
              </ul>
              <ul className="mobile-social-icons" id="mobile-items">
                <SocialIcons onToggle={() => toggleMenu(false)} />
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default NavBar
