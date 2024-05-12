import twitterIcon from './imagesHeader/twitterIcon.png'
import figmaIcon from './imagesHeader/figmaIcon.png'
import InstaIcon from './imagesHeader/instagramIcon.png'
import styles from './Header.module.css'

function Header(){
    return(
    <>
    <header>
        <article className={styles.articleHeader}>
            <h4>Douglas Aleixo</h4>
            <nav>
                <ul>
                    <li><a href="">Section two</a></li>
                    <li><a href="">Section three</a></li>
                    <li><a href="">Section four</a></li>
                </ul>
            </nav>
        </article>
        <article className={styles.articleHeader}>
            <div className={styles.iconsHeader}>
                <img src={twitterIcon} alt="Logo do twitter" />   
                <img src={figmaIcon} alt="Logo do figma" />
                <img src={InstaIcon} alt="Logo do Instagram" />
            </div>
            <div className={styles.darkMode}>
                <p>Dark mode:</p>
                <input type="checkbox" id={styles.check}/>
                <label htmlFor="check" className={styles.switch}>
                    <span className={styles.slider}></span>
                </label>
            </div>
        </article>
    </header>
    </>
    )
}

export default Header