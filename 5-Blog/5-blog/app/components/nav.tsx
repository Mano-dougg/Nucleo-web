import Image from 'next/image';
import search from './search.png'
import './nav.css'
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';



export default function NavBar(){
    return(
        <header>
            <nav>
                <li>
                    <Link className="linkhome" href="/"><h1>Game<span>Network</span></h1>
                    </Link>
                </li>
                <li>  
                    <div className='navBar'>
                       <input type="text" className='searchBar' placeholder='Pesquise...'></input>
                       <IoSearch size={30} className='icon'/>
                    </div> 
                </li> 
            </nav>
        </header>
    )
    
}