'use client';
import './cadastrar.css'
import Cadastrar from '../../components/pagina_cadastro/cadastro';
import Base from '../../components/Base/base';
import Topo from '../../components/Topo/topo';

export default function Cadastro(){
    return(
        <div>
            <Topo />

            <Cadastrar />
            
            <Base />
        </div>
    )
}