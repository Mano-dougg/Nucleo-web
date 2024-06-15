import styles from './cabecalho.module.css'
import Twitter from './cabecalho/twitter.svg'
import Vector from './cabecalho/Vector.svg'
import Instagram from './cabecalho/instagram.svg'
import Toggle from './cabecalho/Toggle.svg'
import Icon from './cabecalho/menuicon.svg'
import IconMobile from './cabecalho/x.svg'

function Cabecalho({ toggleMenu, menuVisible }){

    return(
        <header>
            <nav className={styles.cabecalho}>
                <div className="logo">
                    <h2>Mikelly Correia</h2>
                </div>

                <div id="navList">
                    <ul className={styles.list}>
                        <li className="itens"><a href="#" className="navLink">Section two</a></li>
                        <li className="itens"><a href="#" className="navLink">Section three</a></li>
                        <li className="itens"><a href="#" className="navLink">Section four</a></li>
                    </ul>
                </div>

                <div id="navListRedes">
                    <ul className={styles.redesSociais}>
                        <li className="redes"><img className="twitter"  src={Twitter}/></li>
                        <li className="redes"><img className="vector"  src={Vector}></img></li>
                        <li className="redes"><img className="instagram"  src={Instagram}></img></li>
                    </ul>
                </div>

                <div className={styles.mode}>
                    <p>Dark mode:</p>
                    <ul>
                        <li className="redes"><img className="toggle"  src={Toggle}></img></li>
                    </ul>
                </div>

            </nav>

            <div className={styles.mobileMenuIcon}>
                <button onClick={toggleMenu}>
                    <img className="icon" src={menuVisible ? IconMobile:Icon}></img>
                </button>
            </div>


            {menuVisible && (
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileList}>
                        <li className="itens"><a href="#" className="navLink">Section two</a></li>
                        <li className="itens"><a href="#" className="navLink">Section three</a></li>
                        <li className="itens"><a href="#" className="navLink">Section four</a></li>
                    </ul>

                    <ul className={styles.mobileRedesSociais}>
                        <li className="redes"><img className="twitter"  src={Twitter}/></li>
                        <li className="redes"><img className="vector"  src={Vector}></img></li>
                        <li className="redes"><img className="instagram"  src={Instagram}></img></li>
                    </ul>

                </div>
            )}
        </header>
    )
}

export default Cabecalho;