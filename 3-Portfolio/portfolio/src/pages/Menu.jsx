import { useState } from 'react'
import twitterLight from '../assets/images/twitter-icon.svg'
import twitterDark from '../assets/images/twitter-icon-dark-mode.svg'
import figmaLight from '../assets/images/figma-icon.svg'
import figmaDark from '../assets/images/figma-icon-dark-mode.svg'
import instagramLight from '../assets/images/instagram-icon.svg'
import instagramDark from '../assets/images/instagram-icon-dark-mode.svg'
import toggleOff from '../assets/images/ToggleOff-light.svg'
import toggleOn from '../assets/images/ToggleOn-dark.svg'
import '../assets/styles/Menu.css'

function Menu() {
    const [mode, setMode] = useState('light');
  
    const toggleMode = () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <>
        <nav className={`menu ${mode}`}>
            <div className="words">
                <h4>Matheus Molinari</h4>
                <ul>
                    <li><a href="#">Section two</a></li>
                    <li><a href="#">Section three</a></li>
                    <li><a href="#">Section four</a></li>
                </ul>
            </div>
            <div className="images">
                <img src={twitterLight} alt="Twitter Icone Light" />
                <img src={figmaLight} alt="Figma Icone Light" />
                <img src={instagramLight} alt="Instagram Icone Light" />
                <img src={mode === 'light' ? toggleOff : toggleOn} alt="Botão Toggle" onClick={toggleMode} />
            </div>
        </nav>
      </>
    );
  }

export default Menu
