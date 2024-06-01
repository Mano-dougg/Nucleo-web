import Link from "next/link";


export default function Menu({ toggleMenu }:{toggleMenu:()=>void}){
    

    return(
        <div className="flex flex-col items-center w-screen h-screen pt-[7vh] bg-background-2 ">
            <Link className=" mb-7 border-b-2 border-b-black text-[1.2rem] text-font-2"
            onClick={toggleMenu}
            href="/">Home</Link>
            <Link className=" mb-7 border-b-2 border-b-Homebrew text-[1.2rem] text-font-2"
            onClick={toggleMenu}
            href="/homebrew">Homebrew</Link>
            <Link className=" mb-7 border-b-2 border-b-D&D text-[1.2rem] text-font-2"
            onClick={toggleMenu}
            href="/dnd">D&D: Dungeons & Dragons</Link>
            <Link className=" mb-7 border-b-2 border-b-VTM text-[1.2rem] text-font-2"
            onClick={toggleMenu}
            href="/vtm">VTM: Vampiro a máscara</Link>
            <Link className=" mb-7 border-b-2 border-b-Tormenta text-[1.2rem] text-font-2"
            onClick={toggleMenu}
            href="/tormenta">Tormenta20</Link>
        </div>
    )
}