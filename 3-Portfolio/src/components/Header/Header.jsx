import s from './Header.module.css';
import twitterIcon from '../../assets/twitter-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import { useEffect, useState } from 'react';



export default function Header({changeDarkMode}) {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    }
    
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
    }

    const getTheme = localStorage.getItem("theme")
    if(getTheme === "dark"){
        setDarkMode()
    }else{
        setLightMode()
    }
    
    const toggleTheme = (e) =>{
        if(e.target.checked){
            setDarkMode()
        }else {
            setLightMode()
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
                    DarkMode: 
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" defaultChecked={getTheme === "dark"? true: false} role="switch" id="flexSwitchCheckDefault" onChange={toggleTheme} />
                    </div>
                </div>
            </div>
        </>
    )
}