import styles from './Pag2.module.css'
import exclamation from './imgPag2/bi_exclamation-circle-fill.png'
import { Link } from 'react-router-dom'

export const Pag2 = () => {
    return(
        <>
        <section className={styles.pag2}>
            <article>
                <input type="text" name = "Frase" placeholder = "Digite uma palavra ou frase"  id = 'Frase' required/>
            </article>
            <article className={styles.articleButtons}>
                <aside className={styles.asideExclamation} >
                    <img src={exclamation} alt="Simbolo de exclamação" />
                    <p className={styles.pCinza}> Máx. de 8 letras </p>
                </aside>
                <aside className={styles.asideButtons}>
                    <Link to='/pag3'>
                    <div className={styles.buttonM1}>
                        <p className={styles.pBranco}> Salvar e Começar </p>
                    </div>
                    </Link>
                    <Link to='/pag1'>
                    <div className={styles.buttonM2}>
                        <p> Cancelar </p>
                    </div>
                    </Link>
                </aside>
            </article>
        </section>
        </>
    )
}