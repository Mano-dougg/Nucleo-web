"Use client";
import './topo.css'
import Image from 'next/image'
import login from '../../assets/Icon Login.png'
import Link from 'next/link';
import axios from 'axios';


export default function Topo(){
    return(
        <div className="main-topo">

            <div className='titulo'>
                <Link id='line' href={'./'}><h1>OMNI</h1></Link>
            </div>

            <div className='menu-topo'>
                <Link id='line' href={'./Home'}><h1 id='inicio-resp'>Início</h1></Link>
                <Link id='line' href={'./Lista'}><h1>Lista</h1></Link>
                <Link id='line' href={'./Favoritos'}><h1>Favoritos</h1></Link>
                <Link id='line' href={'./Pesquisa'}><h1>Pesquisar</h1></Link>
            </div>


            <div className='lado-direito'>
                <div className='menu-login'>
                    <Link href={'./Perfil'}><Image src={login} alt=''></Image></Link>
                    {/* <p>Sair</p> */}
                </div>
            </div>
        
        
        </div>
    )
}