import styless from './placar.module.css'

interface needs{
    vencer : number
    perder : number
}

function Placar({vencer,perder}:needs){
    return(
    <div className={styless.div}>
    Vitórias: {vencer || 0}
    <span>Derrotas: {perder || 0}</span>
    </div>
    )
}

export default Placar

