import './topo.css'
import Image from 'next/image'
import login from '../../assets/Icon Login.png'
import lupa from '../../assets/Lupa.png'

export default function Topo(){
    return(
        <div className="main-topo">

            <div className='titulo'>
                <h1>OMNI</h1>
            </div>

            <div className='menu-topo'>
                <h1>Inicio</h1>
                <h1>Lista</h1>
            </div>


            <div className='lado-direito'>
                <div className='menu-login'>
                    <Image src={login} alt=''></Image>
                    {/* <p>Sair</p> */}
                </div>

                <div className='barra-pesquisa'>
                    <input type='text' placeholder='Pesquisar filme'></input>
                    <Image src={lupa} alt=''/>
                </div>
            </div>
        
        
        </div>
    )
}