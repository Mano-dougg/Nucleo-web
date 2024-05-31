import Image from 'next/image';
import search from './search.png'
import './nav.css'



export default function NavBar(){
    return(
        <header>
            <nav>
                <li><h1>Game<span>Network</span></h1></li>
                <li>
                    <div className='navBar'>
                       <input type="text" className='searchBar' placeholder='Pesquise...'></input>
                       <Image 
                       className='navImg'
                       src={search}
                       width={14}
                       height={0}
                       alt="Search" />
                    </div> 
                </li> 
            </nav>
        </header>
    )
    
}