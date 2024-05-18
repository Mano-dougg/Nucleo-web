import './styles.css';
import NavLinks from './NavLinks.jsx';
import SocialIcons from './SocialIcons.jsx';
import toggleLight from '../../assets-light-theme/ToggleOff-light.png';
import toggleDark from '../../assets-dark-theme/ToggleOn.png';

function Header({isNightMode, handleToggleTheme}) {


    return (
        <header className={isNightMode ? 'header-night' : ''}>

            <div>

                <h1> Beatriz Espinheira </h1>

                <nav className='nav-links'>
                <NavLinks></NavLinks>
                </nav>
            </div>

            <div>

            <nav className="social-icons">
                <SocialIcons isNightMode={isNightMode}></SocialIcons>
            </nav>
            
                <section>

                    <p>Dark mode: </p>
                    <div className="toggle-bg">
                    <img src={isNightMode? toggleDark : toggleLight} onClick={handleToggleTheme}></img>
                    </div>

                </section>

            </div>

        </header>
    );
}

export default Header;