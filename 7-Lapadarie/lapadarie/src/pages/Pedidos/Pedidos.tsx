import "./pedidos.css";
import Image from 'next/image';

export default function Pedidos() {
    return (
      
      <main className="allpedidos">

        <section className="pedidos">

          <div className="addpedidos">
            <button>+ Adicionar pessoa a fila</button>
          </div>

          <div className="pedidoslista">

          </div>
          
        </section>

      </main>
    );
}