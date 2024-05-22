import { Link } from 'react-router-dom'
import styles from './Pag1.module.css'

export const Pag1 = () => {
    return(
        <>
        <section className={styles.pag1}>
            <Link to='/Pag3'>
            <div className={styles.buttonG1}>
                <p className={styles.pBranco}>Começar a jogar</p>
            </div>
            </Link>
            <Link to='/Pag2'>
            <div className={styles.buttonG2}>
                <p>Adicionar uma nova palavra</p>
            </div>
            </Link>
        </section>
        </>
    )
}