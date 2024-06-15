import IconePessoas from '../img/iconepessoas.png'
import CarrinhoCompras from '../img/carrinhoCompras.png'
import IconeDinheiro from '../img/IconeDinheiro.png'
import Image from 'next/image'
import Modall from '../components/modal'
import axios from 'axios'

export default async function center(){

    const dash_data = await axios.get('http://localhost:3003/dashboard')
    console.log(dash_data.data)
    const dashboard = dash_data.data.dashboard

    return(
        <div>
        <div className="center">
            <div className="elements">
                <div className="quadros">
                <div className="fila-container">
                    <div className="NaFila">
                    <h5>Pessoas na fila</h5>
                    <Image src={IconePessoas} alt=""></Image>
                    </div>
                    <h2>
                       {dashboard.people_on_line} 
                    </h2>
                </div>
                <div className="vendidos-container">
                    <div className="paesVendidos">
                    <h5>Pães vendidos</h5>
                    <Image src={CarrinhoCompras} alt=""></Image>
                    </div>
                    <h2>
                        {dashboard.breads_sold}
                    </h2>
                </div>
                <div className="entrada-container">
                    <div className="entrada">
                        <h5>Entrada</h5>
                        <Image src={IconeDinheiro} alt=""></Image>
                    </div>
                    <h2>
                        R$ {dashboard.revenue}
                    </h2>
                </div>
                </div>
            </div>
        </div>
        <div className="AdicionarNaFila">
           <Modall/>
        </div>
        </div>
    )
}