import Cabecalho from '@/components/Cabecalho/cabecalho'
import Rodape from '@/components/Rodape/rodape'
import './style.css'

export default function Autor(){
    return (
        <div className='pagina'>
            <Cabecalho />
            <main>
                <h1>Sobre mim</h1>
            </main>
            <Rodape />
        </div>
)
}