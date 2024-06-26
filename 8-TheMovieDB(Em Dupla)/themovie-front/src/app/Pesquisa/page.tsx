"use client";
import './pesquisa.css'
import Base from "../../components/Base/base";
import Topo from "../../components/Topo/topo";
import Pesquisados from '@/components/Pesquisados/pesquisados';



export default async function Pesquisa(){

    return(
        <div className='pesquisa-main'>
            <Topo />
            <div className='pesquisa-item'>
            <Pesquisados />
            </div>
            <Base />
        </div>
    )
}