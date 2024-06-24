import '../HeaderHome/HeaderHome.css'
import './HeaderAccount.css'
import { FaRegUser } from "react-icons/fa";

export default function HeaderHome () {
    return (
      <header className='header-account'>
        <nav>
        <ul>
            <li><a href="/" className='logo'>MovieDB</a></li>
            <li><a href="/Account" className='account'> <FaRegUser className='icon'/> <p className="text"> Entre ou cadastre-se </p> </a></li>
        </ul>
        </nav>
        
      </header>
    );
  }
  