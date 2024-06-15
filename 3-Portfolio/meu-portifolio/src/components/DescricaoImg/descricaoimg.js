import styles from './descricaoimg.module.css'
import InfoJr from './Img/info.jpg'
import UFBA from './Img/ufba.png'

function DescricaoImg(){
    return(
        <section>
            <div className={styles.titulo}>
                <h2>Title</h2>
                <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            </div>

            <div className={styles.tituloimg}>
                <img className={styles.imagem1} src={InfoJr}></img>

                <div className={styles.secundaria}>
                    <h2>Title</h2>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <button class="botao1">Button Primary Light</button>
                </div>
            </div>

            <div className={styles.tituloimg1}>
                <div className={styles.secundaria1}>
                    <h2>Title</h2>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <button class="botao1">Button Primary Light</button>
                </div>

                <img className={styles.imagem1}  src={UFBA}></img>

            </div>
        </section>
    )
}
export default DescricaoImg;