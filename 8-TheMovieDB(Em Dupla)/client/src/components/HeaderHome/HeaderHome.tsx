import SearchBar from '../SearchBar/SearchBar';
import './HeaderHome.css'
import { FaRegUser } from "react-icons/fa";

export default function HeaderHome () {
    return (
      <header className='header-home'>
        <nav>
        <ul>
            <li><a href="/" className='logo'>MovieDB</a></li>
            <li><a href="/Account"> <FaRegUser className='icon'/> <p className="text"> Entrar </p> </a></li>
        </ul>
        </nav>

        <SearchBar/>
        
      </header>
    );
  }
  