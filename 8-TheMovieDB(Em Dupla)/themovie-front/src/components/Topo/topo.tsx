import './topo.css'
import Image from 'next/image'
import login from '../../assets/Icon Login.png'
import lupa from '../../assets/Lupa.png'
import Link from 'next/link';

export default function Topo(){
    return(
        <div className="main-topo">

            <div className='titulo'>
                <h1>OMNI</h1>
            </div>

            <div className='menu-topo'>
                <Link id='line' href={'./'}><h1>Início</h1></Link>
                <Link id='line' href={'./Lista'}><h1>Lista</h1></Link>
                <Link id='line' href={'./Favoritos'}><h1>Favoritos</h1></Link>
            </div>


            <div className='lado-direito'>
                <div className='menu-login'>
                    <Link href={'./Formularios'}><Image src={login} alt=''></Image></Link>
                    {/* <p>Sair</p> */}
                </div>

                <div className='barra-pesquisa'>
                    <input type='text' placeholder='Pesquisar filme'></input>
                    <button id='imagem-pesquisa'><Image src={lupa} alt=''/></button>
                </div>
            </div>
        
        
        </div>
    )
}