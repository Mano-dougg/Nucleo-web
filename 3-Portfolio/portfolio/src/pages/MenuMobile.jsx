import twitterLight from '../assets/images/twitter-icon.svg'
import figmaLight from '../assets/images/figma-icon.svg'
import instagramLight from '../assets/images/instagram-icon.svg'

import '../assets/styles/Menu.css'

function MenuMobile() {
    return (
      <>
        <nav className={`menu-mobile`}>
            <div className="words">
                <li><a href="#">Section two</a></li>
                <li><a href="#">Section three</a></li>
                <li><a href="#">Section four</a></li>
            </div>
            <div className="images">
                  <a href="#"><img src={twitterLight} alt="Twitter Icone Light" /></a>
                  <a href="#"><img src={figmaLight} alt="Figma Icone Light" /></a>
                  <a href="#"><img src={instagramLight} alt="Instagram Icone Light" /></a>           
            </div>

        </nav>
      </>
    );
  }

export default MenuMobile
