//import Style from './cabecalho.css'

export default function Cabecalho(){
    return (
        <header>
            <h1><span style={{fontStyle:'normal', fontWeight:'bold'}}>AI</span>TODAY</h1>
            <input type='text' placeholder='Pesquisar' />
            <button>togglar light/dark mode</button>
        </header>
    )
}