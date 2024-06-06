import './reset.css'
import './cabecalho.css'

export default function Cabecalho(){
    return (
        <header>
            <div>
                <h1><span style={{fontStyle:'normal', fontWeight:'bold'}}>JSS</span>TODAY</h1>
                <input type='text' placeholder='Pesquisar' />
            </div>
        </header>
    )
}