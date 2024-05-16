import twitterIcon from './imagesHeader/twitterIcon.png'
import figmaIcon from './imagesHeader/figmaIcon.png'
import InstaIcon from './imagesHeader/instagramIcon.png'
import styles from './Header.module.css'

function Header(){
    return(
    <>
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
                <img className={styles.IconTwitter} src={twitterIcon} alt="Logo do twitter" />   
                <img className={styles.IconFigma} src={figmaIcon} alt="Logo do figma" />
                <img className={styles.IconInsta} src={InstaIcon} alt="Logo do Instagram" />
            </div>
            <div className={styles.darkMode}>
                <p>Dark mode:</p>
                <input type="checkbox" id={styles.check}/>
                <label htmlFor="check" className={styles.switch}>
                    <span className={styles.slider}></span>
                </label>
            </div>
        </article>

        {/* MENU MOBILE */}
        <article className={styles.menuMobile}>
            <div>
                <button id='styles.btn-menu'>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                </button>
            </div>
            <div>
                <nav className={styles.navMobile}>
                    <ul>
                        <li><a href="#Section2">Section two</a></li>
                        <li><a href="#Section3">Section three</a></li>
                        <li><a href="#Section4">Section four</a></li>
                    </ul>
                </nav>
                <div className={styles.iconsHeaderMobile}>
                    <img className={styles.IconTwitter} src={twitterIcon} alt="Logo do twitter" />   
                    <img className={styles.IconFigma} src={figmaIcon} alt="Logo do figma" />
                    <img className={styles.IconInsta} src={InstaIcon} alt="Logo do Instagram" />
                </div>
            </div>
        </article>
    </header>
    </>
    )
}

export default Header