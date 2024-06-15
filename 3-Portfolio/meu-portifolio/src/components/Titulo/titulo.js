import styles from './titulo.module.css'
import Photo from './img/foto.jpg'
import Line from './img/line1.svg'

function Titulo(){
    return(
        <div className={styles.corpo}>
            <img className={styles.imagem} src={Photo}></img>
            <h1>Hello.<br /> My Name is Mikelly.</h1>
            <img className={styles.line} src={Line}></img>
            
        </div>
    )
}

export default Titulo;