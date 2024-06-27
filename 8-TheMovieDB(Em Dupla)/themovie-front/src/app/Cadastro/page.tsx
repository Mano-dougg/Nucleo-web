'use client';
import './cadastrar.css'
import Cadastrar from '../../components/pagina_cadastro/cadastro';
import Base from '../../components/Base/base';

export default function Cadastro(){
    return(
        <div className='main-cadastro'>

            <Cadastrar />
            
            <Base />
        </div>
    )
}