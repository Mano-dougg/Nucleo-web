import instaLogo from './imgFooter/instaLogo.png'
import linkedinLogo from './imgFooter/linkedinLogo.png'
import Image from "next/image"


export default function Footer() {
    return(
        <>
        <footer>
            <section>
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
                <h4>Copyright © 2024 | AITODAY </h4>
            </section>
        </footer>
        </>
    )
}