import Topo from '../../components/Topo/topo'
import './favoritos.css'
import Base from '../../components/Base/base'
import axios from 'axios';
import * as React from 'react';
import ListaFavoritos from '@/components/ListaFavoritos/listaFavoritos';



export default function Favoritos(){
    // console.log(dados)
    return(
        <div className='main-favoritos'>
            <Topo />

            <div className='favoritos-texto'>
                <h2>Aqui estão os filmes favoritados</h2>
            </div>

            <ListaFavoritos/>

     
            <Base />
        </div>
    )
}