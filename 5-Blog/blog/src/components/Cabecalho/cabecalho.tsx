import './reset.css'
import './cabecalho.css'
import Link from 'next/link'

export default function Cabecalho(){
    return (
        <header>
            <div>
                <Link href="/">
                    <h1><span style={{fontStyle:'normal', fontWeight:'bold'}}>JSS</span>TODAY</h1>
                </Link>
                <input type='text' placeholder='Pesquisar' />
            </div>
        </header>
    )
}