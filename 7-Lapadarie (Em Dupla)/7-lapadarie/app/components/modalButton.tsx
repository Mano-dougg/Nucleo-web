"use client"

import { useState } from "react"
import Modal from "./modal"
import './modal.css'
/*import { GetServerSideProps } from "next"
import {prisma}

*/
interface FormData{
    cliente: string,
    quant: string,
}

export default function ModalButton(){
    const [openModal, setOpenModal] = useState(false)
    const [form, setForm] = useState<FormData>({cliente: '', quant: ''})

    /*async function create(data:FormData*/
    /*const handleSubmit = async (data:...*/

    return(
    <main>
        <div className="btnPessoas" >
            <button onClick={() => setOpenModal(true)}>
                + Adicionar pessoas a fila
            </button>
        </div>

        {/* mostrar as tabelas */}
        {/* <div className="tabelas">
            <u>
            {exemplos.map(exemplo => (
              <li key={exemplo.id} className="listaCliente">
                <div>
                    <h3>{exemplo.cliente}</h3>
                </div>
                <div>
                    <p>Total de pães: {exemplo.quant}</p>
                    <p>Total a pagar: </p>
                </div>
              </li> 
            ))}
            </u>
        </div> */}

        <div>
          <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
            <div>
                <p>Adicionar pessoa a fila</p>
                <form onSubmit={e => {
                    e.preventDefault()
                    /*handleSubmit*/
                }}>
                    <input className="inputData" type="text" value={form.cliente} placeholder='Nome Completo do Cliente' onChange={e=> setForm({...form, cliente: e.target.value})}/>
                    <input className="inputData" type="number" value={form.quant} placeholder='Total de Pães:' onChange={e => setForm({...form, quant: e.target.value})} />
                    <button type="submit" className='btnModalMarrom'>Enviar</button>
                </form>

            </div>

          </Modal>
        </div>
    </main>
    )
}

/*export const getServerSideProps: GetServerSideProps = async () => {
    select:{
    cliente: true
    quant: true
    }
    return{
    props: {
    }}
}*/