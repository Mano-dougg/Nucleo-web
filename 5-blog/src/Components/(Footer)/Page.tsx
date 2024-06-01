import instaLogo from './imgFooter/instaLogo.png'
import linkedinLogo from './imgFooter/linkedinLogo.png'
import Image from "next/image"
import styles from './Page.module.css'

export default function Footer() {
    return(
        <>
        <footer className={styles.Footer}>
            <section className={styles.meet}>
                <h2 className={styles.h2Footer}>Conheça nossas redes sociais</h2>
                <a target="_blank" href="https://www.instagram.com/p/C7hoJrLPztV/?utm_source=ig_web_copy_link&img_index=2">
                    <Image
                    src={instaLogo}
                    width={32}
                    height={32}
                    alt="Picture of insta Logo"
                    />
                </a>
                <a target="_blank" href="https://www.linkedin.com/feed/">
                    <Image
                    src={linkedinLogo}
                    width={32}
                    height={32}
                    alt="Picture of a linkedin Logo"
                    />
                </a>
            </section>
            <section>
                <h5>Copyright © 2024 | AITODAY </h5>
            </section>
        </footer>
        </>
    )
}