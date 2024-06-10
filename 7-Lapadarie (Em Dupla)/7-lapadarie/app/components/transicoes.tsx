import { GoPeople } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import './transicoes.css'

export default function Transicoes(){
//possível lógica para botão enviar do modal e botao deletar pedido:


// const counter = document.querySelector('#counterValue');
// const btnEnviar = document.querySelector('#btnEnviar');
// const btnDeletar = document.querySelector('#btnDeletar');

// let valor = counter.value;

// btnEnviar.addEventListener('click', () => {
//     valor = valor++;
//     counter.value = valor;
// });

// btnDeletar?.addEventListener('click', () =>{
//     valor = valor != 0? --valor : 0;
//     counter.value = valor;
// });

    return(
        <div className="transicoesOut">

            <div className="fila">

                <div className="nomeIcone">
                    <p>Pessoas na Fila</p>
                    <GoPeople size={25}/>
                </div>

                <div>
                    <input type="text" value="0" disabled id="counterValue"></input>
                </div>

            </div>


            <div className="paes">
                <div className="nomeIcone">
                    <p>Pães Vendidos</p>
                    <MdOutlineLocalGroceryStore size={25}/>
                </div>

                <div>
                    <input type="text" value="0" disabled id="paesValue"></input>
                </div>

            </div>


            <div className="entrada">
                <div className="nomeIcone">
                    <p>Entrada</p>
                    <LuDollarSign  size={25}/>
                </div>

                <div>
                    <input type="text" value="0" disabled id="entradaValue"></input>
                </div>

            </div>
        </div>
    )
}
