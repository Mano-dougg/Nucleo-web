import Topo from '../../components/Topo/topo'
import './favoritos.css'
import Base from '../../components/Base/base'


export default function Favoritos(){
    return(
        <div className='main-favoritos'>
            <Topo />

            <div className='favoritos-texto'>
                <h2>Aqui estão os filmes favoritados</h2>
            </div>
            
            <Base />
        </div>
    )
}