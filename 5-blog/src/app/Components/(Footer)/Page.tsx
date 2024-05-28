import instaLogo from './imgFooter/instaLogo.png'
import linkedinLogo from './imgFooter/linkedinLogo.png'
import Image from "next/image"
import styles from './Page.module.css'

export default function Footer() {
    return(
        <>
        <footer className={styles.Footer}>
            <section className={styles.meet}>
                <h2>Conheça nossas redes sociais</h2>
                <Image
                src={instaLogo}
                width={32}
                height={32}
                alt="Picture of insta Logo"
                />
                <Image
                src={linkedinLogo}
                width={32}
                height={32}
                alt="Picture of a linkedin Logo"
                />
            </section>
            <section>
                <h5>Copyright © 2024 | AITODAY </h5>
            </section>
        </footer>
        </>
    )
}