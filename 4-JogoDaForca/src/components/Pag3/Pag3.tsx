import styles from './Pag3.module.css'

export const Pag3 = () => {
    return(
        <>
        <section className={styles.Pag3}>
            <article>


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