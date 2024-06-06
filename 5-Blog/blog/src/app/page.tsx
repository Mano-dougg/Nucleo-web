import Cabecalho from "@/components/Cabecalho/cabecalho"
import Rodape from "@/components/Rodape/rodape"
import './style.css'


export default function Home(){
    return (
        <div className="pagina">
            <Cabecalho />
            <h1>Teste</h1>
            <Rodape />
        </div>
    )
}