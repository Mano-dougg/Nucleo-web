'use client';
import './login.css'
import Acesso from "../../components/pagina_login/login";
import Base from '../../components/Base/base';

export default function Login(){
    return(
        <div className='main-login'>
            <Acesso />
            
            <Base />
        </div>
    )
}