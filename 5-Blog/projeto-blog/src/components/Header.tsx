import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from "next/link"

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
        <Link href="/"><span>AI</span>TODAY</Link>
        <div>
            <div>
                <p>Pesquisar</p>
                <img/>
            </div>
            <img/>
        </div>
    </header> );
}