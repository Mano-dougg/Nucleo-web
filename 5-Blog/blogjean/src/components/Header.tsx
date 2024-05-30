import { createClient } from "@prismicio/client";

import { PrismicNextLink } from "@prismicio/next";
import { create } from "domain";
import Link from "next/link";



export default async function Header() {

    const client = createClient()

    const home = await client.getSingle("home")



    return(
        
        <header>
            <Link href="/">{home.data}</Link>


           <nav></nav>

        </header>

        

    )

    
}