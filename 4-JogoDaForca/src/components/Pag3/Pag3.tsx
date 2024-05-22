import styles from './Pag3.module.css'
import { Link } from 'react-router-dom'
import { HangmanDrawing } from './HangmanDrawing/HangmanDrawing'
import { HangmanWorld } from './HangmanWord/HangmanWord'

export const Pag3 = () => {
    return(
        <>
        <section className={styles.Pag3}>
            <article className={styles.articleForca}>
                <HangmanDrawing/>
                <HangmanWorld/>
            </article>
            <article className={styles.articleButtons}>
                    <Link to='/pag1'>
                    <div className={styles.buttonM1}>
                        <p className={styles.pBranco}> Novo Jogo </p>
                    </div>
                    </Link>
                    <Link to='/pag1'>
                    <div className={styles.buttonM2}>
                        <p> Desistir </p>
                    </div>
                    </Link>
                </article>
        </section>
        </>
    )
}