import styles from './Menu.module.css'

function Menu() {
    return (
        <section className={styles.aparecer}>

            <button className={styles.hamburguer}></button>

            <div className={styles.everyMenu}>
                <nav className={styles.navLinks}>  
                    <a href="">Section two</a>
                    <a href="">Section three</a>
                    <a href="">Section four</a>
                </nav>

                <nav className = {styles.navSocial}>
                    <a href="https://twitter.com" target="_blank"><img src="./public/twitter.svg" alt="Twitter" /></a>
                    <a href="https://figma.com" target="_blank"><img src="./public/figma.svg" alt="Figma" /></a>
                    <a href="https://www.instagram.com" target="_blank"><img src="./public/instagram.svg" alt="Instagram" /></a>
                </nav>
            </div>
        </section>

    )
}

export default Menu