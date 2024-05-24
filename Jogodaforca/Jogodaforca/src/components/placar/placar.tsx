import styless from './placar.module.css'
import baixados from '/baixados.jpg'
import { useState } from 'react'

interface needs{
    vencer : number
    perder : number
}

function Resetar(){
    localStorage.setItem('Venci', '0');
    localStorage.setItem('Perdi', '0');
    window.location.reload()
}
      

function Placar({vencer,perder}:needs){
    const [menuO, setmenuO] = useState(true)
    const trocar = () => {
      setmenuO(!menuO)
    }
    return(
    <div className={styless.div}>
    <figure>
    <img src={baixados}/>
    <h2>SCORE</h2>
    <p>Vitórias: {vencer || 0}</p>
    <span className='um'>Derrotas: {perder || 0}</span>
    <button onClick={trocar}>Reset</button>
    </figure>
    </div>
    )
}

export default Placar

