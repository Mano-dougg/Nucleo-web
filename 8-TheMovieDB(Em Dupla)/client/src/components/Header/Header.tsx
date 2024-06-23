import SearchBar from '../SearchBar/SearchBar';
import './Header.css'
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

export default function Header() {
    return (
      <header>
        <a href="/" className='logo'>MovieDB</a>

        <nav>
        <ul>
            <li><a href="/login"> <FaRegUser /> <p className="text"> Login   </p> </a></li>
            <li><a href="/favorites"> <GrFavorite /> <p className="text">  Favoritos </p></a></li>
        </ul>
        </nav>
        <SearchBar/>
        
      </header>
    );
  }
  