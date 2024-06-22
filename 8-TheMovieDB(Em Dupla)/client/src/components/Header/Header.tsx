import SearchBar from '../SearchBar/SearchBar';
import './Header.css'
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

export default function Header() {
    return (
      <header>
        <p className='logo'>MovieDB</p>

        <nav>
        <ul>
            <li><a href="#"> <FaRegUser /> <p className="text"> Login   </p> </a></li>
            <li><a href="#"> <GrFavorite /> <p className="text">  Favoritos </p></a></li>
        </ul>
        </nav>
        <SearchBar/>
        
      </header>
    );
  }
  