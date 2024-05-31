import Image from "next/image";
import { useState } from "react";
const Header: React.FC = () => {
    const[cor,setCor] = useState("branco")
    return(
        <div className="header">
            <h1><span className={cor}><span className="AI">AI</span><i>Today</i></span></h1>
            <div className="container">
                <div className="entrada">
                <textarea className="pesquisar" placeholder=" Pesquisar"/>
                <Image
                    src="/lupa.svg"
                    alt="lupa"
                    width={32}
                    height={32}
                />
                </div>
                <div className="luz">
                <button id="mudarmodo"><Image
                    src="/light.svg"
                    alt="trocar modi"
                    width={32}
                    height={32}
                />
            </button>
                </div>
            </div>
        </div>
    )
}
export default Header;