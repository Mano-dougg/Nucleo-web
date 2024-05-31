import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from "next/link"
import Image from 'next/image'
import Logo from "../assets/logo.png";
import Sun from "../assets/sun.png";
import Search from "../assets/search.png";
import './Header.css'

// export default async function Header (){
export default function Header (){

    // const client = createClient();

    // const settings = await client.getSingle("settings");

    // return (
    // <header> 
    // <Link href="/">{settings.data.site_title}</Link>
    // <div>
            // <Link href="/"><span>AI</span>TODAY</Link>
            // <img/>
    // <div/>
    //     </nav>
    // </header>);

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