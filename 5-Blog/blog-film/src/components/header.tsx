import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from 'next/image';
import WatchRian from '../app/assets/watch-rian.png';
import Link from "next/link";
import Search from '../app/assets/search.png';


export default async function Header() {
    const client = createClient();
    const config = await client.getSingle('config');


    return (
        <>
        <header className="bg-[#262b38] w-full flex flex-col md:flex-row gap-6 items-center justify-between h-16 px-28 ">
            <Link href='/' className="flex z-10 h-full w-auto items-center">
                <div className="flex h-full items-center">
                    <Image src={WatchRian} alt="Logo" className="h-full w-auto" />
                </div>
            </Link>
            <nav>
                <ul className="flex">
                    {config.data.navigation.map((item) => (
                        <li key={item.label}>
                            <PrismicNextLink field={item.link} className='font-inter text-white font-semibold ml-10 text-1.8xl '>
                                {item.label}
                            </PrismicNextLink>
                        </li>
                    ))}

                    <input className="ml-8 text-sm rounded" type="text" placeholder="Search" />
                    <Image src={Search} alt=""/>

               </ul>
            </nav>
            </header> 
        </>
    )
}



