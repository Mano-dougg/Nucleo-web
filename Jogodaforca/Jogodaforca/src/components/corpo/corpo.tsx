import styles3 from './corpo.module.css'
import excl from '/excl.svg'


function Corpo(){
    return(
        <div className={styles3.div}>
            <h1>Digite uma palavra ou frase</h1>
            <textarea wrap="soft"></textarea>
            <figure className="exla">
                <img src={excl}/>
                <h2 className="me">Máx. de 8 letras</h2>
            </figure>
        </div>
    )
}

export default Corpo