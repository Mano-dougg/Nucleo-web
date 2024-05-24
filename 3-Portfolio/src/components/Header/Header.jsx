import s from './Header.module.css';
import twitterIcon from '../../assets/twitter-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import twitterDark from '../../assets/twitter-icon-dark.svg';
import instagramDark from '../../assets/instagram-icon-dark.svg';
import figmaDark from '../../assets/figma-icon-dark.svg';



export default function Header({theme, setTheme}) {


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
                    <a href='#'>
                        Section two
                    </a>

                    <a href='#'>
                        Section three
                    </a>

                    <a href='#'>
                        Section four
                    </a>
                </nav>
            </div>
            <div className={s.rightSide}>
                <div className={s.iconImages}>
                    <img src={theme==='dark'? twitterDark : twitterIcon} alt="twitter icon" />
                    <img src={theme==='dark'? figmaDark : figmaIcon} alt="figma icon" />
                    <img src={theme==='dark'? instagramDark : instagramIcon } alt="instagram icon" />
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