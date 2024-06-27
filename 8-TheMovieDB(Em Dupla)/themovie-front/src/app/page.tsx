import './page.css'
import Link from 'next/link';
import Base from '../components/Base/base';

export default function Formularios(){
    return(
        <div className='mae-main'>
            <div className='botoes-forms'>
                <div className='login-forms'>
                    <Link href={'./Login'}><button id='botaozin'>Fazer Login</button></Link>
                </div>

                <div className='cadastrar-forms'>
                    <Link href={'./Cadastro'}><button id='botaozin'>Não tenho uma conta</button></Link>
                </div>
            </div>
            
            <Base />
        </div>
    )
}