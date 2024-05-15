
import s from './HamburguerMenu.module.css';
import twitter from '../../assets/twitter-icon.svg';
import figma from '../../assets/figma-icon.svg';
import instagram from '../../assets/instagram-icon.svg';
import twitterDark from '../../assets/twitter-icon-dark.svg';
import instagramDark from '../../assets/instagram-icon-dark.svg';
import figmaDark from '../../assets/figma-icon-dark.svg';

export default function HamburguerMenu({theme}) {
    function toggleMenu() {
        let menuButton = document.querySelector(`.${s.menuButton}`);
        let menu = document.querySelector(`.${s.menu}`);
        menuButton.classList.toggle(`${s.open}`);
        menu.classList.toggle(`${s.openedMenu}`);
    }
    return (
        <section className={s.menu}>
            <div className={s.menuButton} onClick={toggleMenu}>
                <div className={s.bar1}></div>
                <div className={s.bar2}></div>
                <div className={s.bar3}></div>
            </div>
            <nav className={s.navigation}>
                <a href="#two">Section two</a>
                <a href="#three">Section three</a>
                <a href="#four">Section four</a>

                <div className={s.socialNav}>
                    <a href="https://twitter.com/">
                        <img src={theme === 'dark'? twitterDark : twitter}/>
                    </a>
                    <a href="https://www.figma.com/">
                        <img src={theme === 'dark'? figmaDark : figma} alt="figma icon" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={theme === 'dark' ? instagramDark : instagram} alt="instagram icon" />
                    </a>
                </div>
            </nav>
        </section>
    )
}