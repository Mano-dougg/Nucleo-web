import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from 'next/image';
import WatchRian from '../app/assets/watch-rian.png';
import Link from "next/link";
import Github from '../app/assets/github.svg';
import Linkedin from '../app/assets/linkedin.svg';
import Twitter from '../app/assets/twitter.svg';


export default async function Footer() {
    const client = createClient();
    const footer = await client.getSingle('footer');


    return (
        <footer className="font-inter w-full flex flex-col gap-6 items-center justify-between h-16  mt-10 mb-0">
            
            <nav className="font-inter w-full flex flex-col md:flex-row items-center justify-center h-16 px-6 mt-10">
                <h3 className="font-inter font-semibold text-white">Discover my social networks!</h3>
                <div className="font-inter flex flex-row items-center h-16 p-0 m-0 ">
                    <Link target='_blank' href={'https://github.com/Rian-Victor'} className="flex h-full w-auto items-center ml-10">
                        <Image src={Github} alt="" className="h-1/2 w-auto"></Image>
                    </Link>
                    <Link target='_blank' href={'https://www.linkedin.com/in/rian-victor-ribeiro-1705b52b3/'} className=" flex h-full w-auto items-center ml-10">
                        <Image src={Linkedin} alt="" className="h-1/2 w-auto"></Image>
                    </Link>
                    <Link target='_blank' href={'https://x.com/victtorthedev'} className="flex h-full w-auto items-center ml-10">
                        <Image src={Twitter} alt="" className="h-1/2 w-auto"></Image>
                    </Link>
                </div>
            </nav>
            <div className="w-full flex flex-col gap-6 md:flex-row items-center justify-center h-16 px-28 -mt-8">
                <h4 className="font-inter font-regular text-white">Copyright © 2024 | </h4>
                <Link href='/' className="flex h-full w-auto items-center">
                    <div className="flex h-full items-center">
                        <Image src={WatchRian} alt="Logo" className="h-full w-auto" />
                    </div>
                </Link>
            </div>
            
            
        </footer>
    )
}



