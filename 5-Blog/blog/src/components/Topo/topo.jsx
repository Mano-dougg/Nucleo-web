import './topo.css'
import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'
import solzinho from '../../assets/sol.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Topo(){
    return(
        <div className="titulo">
            <div className='logo'>
                <Link href={'./'}><Image src={logo} /></Link>
            </div>

            <div className='direita'>
                <div className='pesquisa'>
                    <input type='text' placeholder='Pesquisar'></input>
                    <Image src={lupa} />
                </div>

                <div className='tema'>
                    <Image src={solzinho} />
                </div>
            </div>
        </div>
    )
}