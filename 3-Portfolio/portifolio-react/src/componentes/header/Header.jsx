import './styles.css';
import ThemeToggle from './ThemeToggle.jsx';
import NavLinks from './NavLinks.jsx';
import SocialIcons from './SocialIcons.jsx';

function Header() {

    const isNightMode=false;

    return (
        <header className={isNightMode ? 'header-night' : 'header-light'}>

            <div>

                <h1> Beatriz Espinheira </h1>

                <NavLinks></NavLinks>

            </div>

            <div>

                <SocialIcons></SocialIcons>

                <section>
                    <p>Dark mode: </p>
                    <ThemeToggle></ThemeToggle>
                </section>

            </div>

        </header>
    );
}

export default Header;