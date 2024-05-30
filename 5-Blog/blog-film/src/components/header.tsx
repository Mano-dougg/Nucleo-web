import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from 'next/image';
import WatchRian from '../app/assets/watch-rian.png';
import Link from "next/link";


export default async function Header() {
    const client = createClient();
    const config = await client.getSingle('config');


    return (
        <header className=" font-inter w-full flex flex-col md:flex-row gap-6 items-center justify-between h-16 px-28 mt-10">
            <Link href='/' className="flex h-full w-auto items-center">
                <div className="flex h-full items-center">
                    <Image src={WatchRian} alt="Logo" className="h-full w-auto" />
                </div>
            </Link>
            <nav>
                <ul className="flex">
                    {config.data.navigation.map((item) => (
                        <li key={item.label}>
                            <PrismicNextLink field={item.link} className='font-montserrat font-regular text-white font-regular ml-10 text-1.8xl'>
                                {item.label}
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}



