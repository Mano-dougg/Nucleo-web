import facebookLogo from '../assets/img/facebook.svg'
import twitterLogo from '../assets/img/twitter.svg'
import instagramLogo from '../assets/img/instagram.svg'
import toggleOffLight from '../assets/img/toggleOff-light.svg'
import './nav.css'

function Nav() {

    return(
        <>
            <div className="nav-wrapper">
                <nav className="main-nav">
                    <div className="nav-left-content">
                        <header>
                            <h3>Kevin Bernett</h3>
                        </header>
                        <ul>
                            <li><a href="">Section two</a></li>
                            <li><a href="">Section three</a></li>
                            <li><a href="">Section four</a></li>
                        </ul>
                    </div>
                    <div className="nav-right-content">
                        <ul>
                            <li><img src={twitterLogo} alt="logo do twitter" /></li>
                            <li><img src={facebookLogo} alt="logo do facebook" /></li>
                            <li><img src={instagramLogo} alt="logo do instagram" /></li>
                        </ul>
                        <div className='dark-mode'>
                            <p>Dark mode:</p>
                            <img src={toggleOffLight} alt="mudar tema" />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Nav;