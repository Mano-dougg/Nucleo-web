import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import "./footer.css";



export default async function Footer(){

    const client = createClient();
    const settings = await client.getSingle("settings");
    const logoText = settings.data.logo;

    return <footer>
    

        <ul className="footerul">
            {settings.data.info.map(({link, label})=>(
                <li className="footerli" key={label}>
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </ul>


    <Link className="logof" href="/">{logoText}</Link>

    </footer>
}