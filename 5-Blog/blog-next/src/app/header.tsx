import Image from "next/image";
import styles from "./modulos.module.css";

type tema = {
    tema: string
}
const Header = ({tema}:tema) => {
    const headerClassName = `header-${tema}`;
    const entradaClassName = `entrada-${tema}`
    const textareaClassName = `textarea-${tema}`
    return(
        <div className={styles[headerClassName]}>
            <h1>
                AI
                <i>Today</i>
            </h1>
            <div className="container">
            <div className={styles[entradaClassName]}>
                <textarea className={styles[textareaClassName]} placeholder=" Pesquisar" />
            </div>
            </div>
        </div>
    )
}
export default Header;