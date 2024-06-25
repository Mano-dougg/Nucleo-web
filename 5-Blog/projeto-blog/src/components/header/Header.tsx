import Link from "next/link"
import Image from 'next/image'
import Logo from "../../assets/logo.png";
import Sun from "../../assets/sun.png";
import Search from "../../assets/search.png";
import './Header.css'


export default function Header (){

    return (
    <header>
        <Link href="/"><Image
      src={Logo}
      alt="Logo" className='logo'/></Link>
        <div className='header-left'>
            <div className='pesquisa'>
                <p>Pesquisar</p>
                <Image src={Search} alt="Search icon" className='search-img'/>
            </div>
            <Image src={Sun} alt="Sun" className="sun-img"/>
        </div>
    </header> );
}