import s from './Header.module.css';
import twitterIcon from '../../assets/twitter-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import { useEffect, useState } from 'react';
import lightIcon from '../../../public/logo.png'
import darkIcon from '../../../public/logo-dark.png'



export default function Header({changeDarkMode}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        const setDarkMode = () => {
            document.querySelector("body").setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        }
        
        const setLightMode = () => {
            document.querySelector("body").setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
            setTheme("light")
        }

        if(theme === "dark") setDarkMode();
        if(theme === "light") setLightMode();

        // Change favicon dinamically
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = `${theme === "dark" ? darkIcon : lightIcon}`;
    }, [theme])

    const toggleTheme = (e) =>{
        if(e.target.checked){
            setTheme("dark")
        }else {
            setTheme("light")
        }
    }

    return (
        <>
            <div className={s.leftSide}>
                <h1>Israel Pedreira</h1>

                <nav className={s.navigation}>
                    <a href=''>
                        Section two
                    </a>

                    <a href=''>
                        Section three
                    </a>

                    <a href=''>
                        Section four
                    </a>
                </nav>
            </div>
            <div className={s.rightSide}>
                <div className={s.iconImages}>
                    <img src={twitterIcon} alt="twitter icon" />
                    <img src={figmaIcon} alt="figma icon" />
                    <img src={instagramIcon} alt="instagram icon" />
                </div>

                <div className={s.darkMode}>
                    <p className={s.darkModeText}>
                        Dark mode: 
                    </p>
                    <div className="form-check form-switch" style={{marginBottom:0}}>
                        <input className="form-check-input" type="checkbox" defaultChecked={theme === "dark"} role="switch" id="flexSwitchCheckDefault" onChange={toggleTheme} />
                    </div>
                </div>
            </div>
        </>
    )
}