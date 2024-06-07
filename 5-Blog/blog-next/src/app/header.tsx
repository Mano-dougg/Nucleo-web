import Image from "next/image";
import styles from "./modulos.module.css";
type tema = {
    tema: string
}
const Header = ({tema}:tema) => {
    const headerClassName = `header-${tema}`;
    return(
        <div className={styles[headerClassName]}>
            <h1>
                AI
                <i>Today</i>
            </h1>
            <div className="container">
            <div className="entrada">
                <textarea className="pesquisar" placeholder=" Pesquisar" />
                <Image
                src="/lupa.svg"
                alt="lupa"
                width={32}
                height={32}
                />
            </div>
            </div>
        </div>
    )
}
export default Header;