'use client';
import './lista.css'
import Topo from '../../components/Topo/topo'
import Base from '../../components/Base/base'
import Lista from "../../components/Lista/lista";

export default function Lista_total(){
    return(
        <div className='div-lista-total'>
            <Topo />
            
            <div className='div-meio-lista'>
                <Lista />
            </div>
            

            <Base />
        </div>
    )
}