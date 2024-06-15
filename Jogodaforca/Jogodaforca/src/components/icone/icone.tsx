import styles1 from './icone.module.css'
import f41 from '/f4.svg'


/* Essa é simples */
function Icone(){
    return(
    <figure className={styles1.figure}>
        <img src={f41}/>
    </figure>
    )
}

export default Icone