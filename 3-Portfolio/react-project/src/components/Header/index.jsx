import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.leftNav}>
                <nav className={styles.navBrand}>
                    <h4> Priscila Anjos </h4>
                </nav>

                <nav className={styles.navLinks}>
                    <a href="">Section two</a>
                    <a href="">Section three</a>
                    <a href="">Section four</a>
                </nav>
            </div>
            
            <nav className={styles.navRight}>

                <nav className = {styles.navSocial}>
                    <a href="https://twitter.com" target="_blank"><img src="./public/twitter.svg" alt="Twitter" /></a>
                    <a href="https://figma.com" target="_blank"><img src="./public/figma.svg" alt="Figma" /></a>
                    <a href="https://www.instagram.com" target="_blank"><img src="./public/instagram.svg" alt="Instagram" /></a>
                </nav>

                <nav className = {styles.navDark}>
                    <a>Dark mode: </a>

                    <div className={styles.botao}>
                        <input type="checkbox" id="toggle" className={styles.checkbox} />
                        <label for="toggle" className={styles.label}>
                            <div class={styles.ball}></div>
                        </label>
                    </div>  
                    <script src="script.js"></script>
                </nav>

            </nav>

        </header>

    )
}

export default Header