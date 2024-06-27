import Lupa from "./imagens-header/lupa-de-pesquisa.png"
import Sol from "./imagens-header/sol.png"
import Aitoday from "./imagens-header/AITODAY.png"
import Image from "next/image"
import "./header.css"

export default function Header() {
    return(
        <div className="cabecalho">
            <div className="aitoday">
                <Image src={Aitoday} alt="aitoday"/>
            </div>
            <div className="search">
                <label htmlFor="searchInput">
                   <span className="material-symbols-outlined"></span> 
                </label>
                <input type="text" id="searchInput" placeholder="Pesquisar" />
                <Image src={Lupa} alt="lupa" />
            </div>
            <div className="darkmode">
                <Image src={Sol} alt="sol" className="sol"/>
            </div>
        </div>
    )
}