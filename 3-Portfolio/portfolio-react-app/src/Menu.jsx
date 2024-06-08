import './styles/menu.css'
import twitterLogo from './assets/twitter.svg'
import linkedinLogo from './assets/linkedin.svg'
import instagramLogo from './assets/instagram.svg'
const Menu = () => {
    return (
        <div className="hamburguer">
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <ul id="menu">
                    <a href="#"><li><span className='azul'>Section two</span></li></a>
                    <a href="#"><li><span className='azul'>Section three</span></li></a>
                    <a href="#"><li><span className='azul'>Section four</span></li></a>
                    <div className="icons">
                        <a href="https://x.com/"><img src={twitterLogo} alt="twitter"/></a>
                        <a href="https://www.linkedin.com/in/matheus-de-castro-5a6593268/"><img src={linkedinLogo} alt="linkedin" /></a>
                        <a href="https://www.instagram.com/matheussmd"><img src={instagramLogo} alt="instagram"/></a>
                    </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Menu;