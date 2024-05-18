import twitterIcon from './imagesHeader/twitterIcon.png'
import figmaIcon from './imagesHeader/figmaIcon.png'
import InstaIcon from './imagesHeader/instagramIcon.png'
import styles from './Header.module.css'
import { Toggle } from './Toggle'
import { useEffect, useState } from 'react'
import App from '../../App'

function Header(){
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    // Função pra quando o menu hamburger abrir, esconder tudo que estiver fora da tela
    {active ? document.body.style.overflow = 'hidden' : 
    document.body.style.overflow = 'visible'
    }
    
    return(
    <>
    <div className={styles.Header}>
    <header>
        {/* MENU DESKTOP */}
        <article className={styles.articleHeader}>
            <h4 className={styles.h4SemPaddingBottom}> <a className={styles.linkTitulo} href="#Section1">Douglas Aleixo</a></h4>
            <nav className={styles.navDesktop}>
                <ul>
                    <li><a href="#Section2">Section two</a></li>
                    <li><a href="#Section3">Section three</a></li>
                    <li><a href="#Section4">Section four</a></li>
                </ul>
            </nav>
        </article> 
        <article className={styles.articleHeader}>
            <div className={styles.iconsHeaderDesktop}>
                <a href="https://twitter.com/home?lang=pt"><img className={styles.IconTwitter} src={twitterIcon} alt="Logo do twitter" /></a>
                <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1366957192187725218"><img className={styles.IconFigma} src={figmaIcon} alt="Logo do figma" /> </a> 
                <a href="https://www.instagram.com"><img className={styles.IconInsta} src={InstaIcon} alt="Logo do Instagram" /> </a>
            </div>
            
        </article>

        {/* MENU MOBILE */}
        <article className={styles.menuMobile}>
            <div>
                <button onClick={ToggleMode} id='styles.btn-menu'>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                </button>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <nav className={styles.navMobile}>
                    <ul>
                        <li><a onClick={ToggleMode} href="#Section2">Section two</a></li>
                        <li><a onClick={ToggleMode} href="#Section3">Section three</a></li>
                        <li><a onClick={ToggleMode} href="#Section4">Section four</a></li>
                    </ul>
                </nav>
                
                <div className={styles.iconsHeaderMobile}>
                <a href="https://twitter.com/home?lang=pt"><img className={styles.IconTwitter} src={twitterIcon} alt="Logo do twitter" /></a>   
                <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1366957192187725218"><img className={styles.IconFigma} src={figmaIcon} alt="Logo do figma" /> </a>
                <a href="https://www.instagram.com"><img className={styles.IconInsta} src={InstaIcon} alt="Logo do Instagram" /> </a>
                </div>
            </div>
        </article>
    </header>
    </div>
    </>
    )
}

export default Header