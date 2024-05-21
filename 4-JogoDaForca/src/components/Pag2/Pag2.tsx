import styles from './Pag2.module.css'

export const Pag2 = () => {
    return(
        <>
        <section className={styles.pag2}>
            <article>
                <input type="text" name = "Frase" placeholder = "Digite uma palavra ou frase"  id = 'Frase' required/>
            </article>
            <article className={styles.articleButtons}>
                <div className={styles.buttonM1}>
                    <p className={styles.pBranco}> Salvar e Começar </p>
                </div>
                <div className={styles.buttonM2}>
                    <p> Cancelar </p>
                </div>
            </article>
        </section>
        </>
    )
}