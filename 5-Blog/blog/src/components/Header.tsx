import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import "./header.css";




export default async function Header(){

    const client = createClient();

    const settings = await client.getSingle("settings");
  
    const logoText = settings?.data.logo || '';

    const [part1, part2] = logoText.split(' ');
    

    return<header>
        

        <Link  className="logo" href="/">{logoText}</Link>

        <div className="barra" > {} </div>


    </header>

}

/* <nav>
        <ul>
            {settings.data.header.map(({link, label})=>(
                <li key={label}>
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </ul>
    </nav>*/