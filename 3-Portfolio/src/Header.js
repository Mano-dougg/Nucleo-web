import React from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

function Header({ darkMode, toggleDarkMode }) {
    return (
      <header>
        <nav id="nav-bar">
          <div id="left-aligned">
            <h4 id="logo">Kevin Bennet</h4>
            <NavLinks />
          </div>
          <div id="right-aligned">
            <SocialLinks />
            <div id="toggle">
              <label id="mode">Dark mode:</label>
              <input type="checkbox" id="check" onChange={toggleDarkMode} />
              <label htmlFor="check" className="button" />
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
export default Header;