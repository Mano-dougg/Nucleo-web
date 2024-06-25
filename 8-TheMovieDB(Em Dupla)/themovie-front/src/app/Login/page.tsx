'use client';
import './login.css'
import Acesso from "../../components/pagina_login/login";
import Base from '../../components/Base/base';
import Topo from '../../components/Topo/topo';

export default function Login(){
    return(
        <div>
            <Topo />

            <Acesso />
            
            <Base />
        </div>
    )
}