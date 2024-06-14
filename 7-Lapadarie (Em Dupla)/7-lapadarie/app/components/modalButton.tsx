
"use client"

import { useState } from "react"
import Modal from "./modal"
import './modal.css'
import { GetStaticProps } from "next"
import prisma from '../../lib/prisma'
import Tabela from "./tabela"
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
        <Tabela pedidos={[]} />

        <div>
          <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
            <div>
                <p>Adicionar pessoa a fila</p>
                <form onSubmit={e => {
                    e.preventDefault()
                    /*handleSubmit*/
                }}>
                    <input className="inputData" type="text" /*value={form.nome}*/ placeholder='Nome Completo do Cliente'/* onChange={e=> setForm({...form, nome: e.target.value})}*//>
                    <input className="inputData" type="number" /*value={form.paes}*/ placeholder='Total de Pães:' /*onChange={e => setForm({...form, paes: e.target.value})} *//>
                    <button type="submit" className='btnModalMarrom'>Enviar</button>
                </form>

            </div>

          </Modal>
        </div>
    </main>
    )
}

