import Link from "next/link";
import "./menu.css"


export default function Menu({ toggleMenu }:{toggleMenu:()=>void}){
    

    return(
        <div className="fixed top-0 left-0 z-[11] flex flex-col items-center w-[60vw] sm:w-[50vw] h-screen pt-[7vh] bg-[var(--background4)] ">
            <Link className="slide mb-7 border-b-2 border-b-black text-[1.1rem] text-font-2"
            onClick={toggleMenu}
            href="/">Home</Link>
            <Link className="slide mb-7 border-b-2 border-b-Homebrew text-[1.1rem] text-font-2"
            onClick={toggleMenu}
            href="/homebrew">Homebrew</Link>
            <Link className="slide mb-7 border-b-2 border-b-D&D text-[1.1rem] text-font-2"
            onClick={toggleMenu}
            href="/dnd">Dungeons & Dragons</Link>
            <Link className="slide mb-7 border-b-2 border-b-VTM text-[1.1rem] text-font-2"
            onClick={toggleMenu}
            href="/vtm">Vampiro: a máscara</Link>
            <Link className="slide mb-7 border-b-2 border-b-Tormenta text-[1.1rem] text-font-2"
            onClick={toggleMenu}
            href="/tormenta">Tormenta20</Link>
        </div>
    )
}