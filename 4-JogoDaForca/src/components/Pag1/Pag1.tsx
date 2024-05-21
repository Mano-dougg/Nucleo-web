import styles from './Pag1.module.css'

export const Pag1 = () => {
    return(
        <>
        <section className={styles.pag1}>
            <div className={styles.buttonG1}>
                <p className={styles.pBranco}>Começar a jogar</p>
            </div>
            <div className={styles.buttonG2}>
                <p>Adicionar uma nova palavra</p>
            </div>
        </section>
        </>
    )
}