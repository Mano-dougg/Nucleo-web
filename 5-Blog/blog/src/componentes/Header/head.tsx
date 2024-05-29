import Link from 'next/link'
import styles from './head.module.css'
import Botao from '../Btn/botao2'

function Header(){
    return(
    <header className={styles.header}>
    <nav>
    <h1>ANIMOMENT</h1>
    <Link href="/Autor"><Botao backgroundColor='#1D70A2' text0='Autor'/></Link>
    <Link href="/Post"><Botao backgroundColor='white' text0='Post'/></Link> 
    </nav>
    </header>
    )
}

export default Header