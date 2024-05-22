import styles from './Pag3.module.css'
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
                    <div className={styles.buttonM1}>
                        <p className={styles.pBranco}> Novo Jogo </p>
                    </div>
                    <div className={styles.buttonM2}>
                        <p> Desistir </p>
                    </div>
                </article>
        </section>
        </>
    )
}