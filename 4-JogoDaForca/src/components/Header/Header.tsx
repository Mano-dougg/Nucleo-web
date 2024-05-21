import styles from './Header.module.css'
import Logo from './imgHeader/alura.png'

export const Header = () => {
    return(
        <section className={styles.Header}>
            <img src={Logo} alt="Logo da Alura"/>
        </section>
    )
}
