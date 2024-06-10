import "./informacoes.css";
import Image from 'next/image';

export default function Informacoes() {
    return (
      <main className="infor">
        <Fila />
        <Vendidos/>
        <Entrada />
      </main>
    );
}

function Fila(){
    return(
        <main className="pessoasfila">
            <div className="cima">
                <p>Pessoas na fila</p>
                <Image src="/person.svg" alt="Lapadarie" width={25} height={22} />
            </div>

            <div className="fila">
                <p className="branco">7</p>
            </div>
        </main>
    );
}

function Vendidos(){
    return(
        <main className="vendidos">
            <div className="cima">
                <p>Pães vendidos</p>
                <Image src="/carrinho.svg" alt="Lapadarie" width={25} height={22} />
            </div>

            <div className="quantidade">
                <p className="branco">350</p>
            </div>
        </main>
    );
}

function Entrada(){
    return(
        <main className="entrada">
            <div className="cima">
                <p>Entrada</p>
                <Image src="/entrada.svg" alt="Lapadarie" width={25} height={22} />
            </div>

            <div className="valor">
                <p className="marrom">R$ 175,00</p>
            </div>
        </main>
    );
}