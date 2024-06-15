import styless from './placar.module.css'
import baixados from '/baixados.jpg'

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
    return(
    <div className={styless.div}>
    <figure>
    <img src={baixados}/>
    <h2>SCORE</h2>
    <p>Vitórias: {vencer || 0}</p>
    <span className='um'>Derrotas: {perder || 0}</span>
    <button onClick={Resetar}>Reset<h3>R</h3></button>
    </figure>
    </div>
    )
}

export default Placar

