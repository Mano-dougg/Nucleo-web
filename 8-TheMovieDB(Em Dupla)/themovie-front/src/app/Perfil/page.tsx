import './perfil.css'
import Base from '../../components/Base/base';
import Topo from '../../components/Topo/topo';
import axios from 'axios';
import ListaFavoritos from '@/components/ListaFavoritos/listaFavoritos';
import Link from 'next/link';


const getData = async () => {
    const data = await axios.get("http://localhost:5000/logado");
    return data;
};

export default async function Formularios(){
    const dados = await getData()
    return(
        <div>
            <Topo />

            <div className='perfil-div'>

                <div className='cima-perfil'>
                    <div className='dados-user'>
                        <p>Bem vindo!</p>
                    </div>

                    <div className='user-log'>
                        <Link href={'/'}><button>Logout</button></Link>
                    </div>
                </div>
            </div>

            <div className='user-favoritos'>
                    <h2>Seus favoritos:</h2>
                    <ListaFavoritos />
            </div>

            

            
            <Base />
        </div>
    )
}