import s from './Header.module.css';
import twitterIcon from '../../assets/twitter-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import { Switch } from '@chakra-ui/react'

export default function Header() {
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
                    DarkMode: <Switch /> 
                </div>
            </div>
        </>
    )
}