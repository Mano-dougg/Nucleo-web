"Use client";
import './topo.css'
import Image from 'next/image'
import login from '../../assets/Icon Login.png'
import lupa from '../../assets/Lupa.png'
import Link from 'next/link';
import axios from 'axios';
import { Key} from 'react';


const iniciarPesquisa = async() =>{
    await axios.post('http://localhost:5000/iniciapesquisa')
}
  
iniciarPesquisa()



export default function Topo(){
    var title = ''
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/pesquisar", { title }); 
            window.location.href = '/Pesquisa';
        } catch(error){
            console.error('Erro ao pesquisar: ', error);
       } 
    }
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
                    <form id='form-main' onSubmit={handleSubmit}>
                    <input type='text' 
                    placeholder='Pesquisar filme'
                    name='guardar'
                    onChange={(e) => title = e.target.value}
                    />
                     <button onClick={()=>{window.location.href = '/Pesquisa';}} type='submit' id='imagem-pesquisa'><Image src={lupa} alt=''/></button>
                     </form>
                    
                </div>
            </div>
        
        
        </div>
    )
}