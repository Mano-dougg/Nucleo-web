"use client"

import { useState } from "react"
import Modal from "./modal"
import './modal.css'
import axios from "axios"
import Tabela from "./tabela"

interface FormData{
    cliente: string,
    quant: string,
}

export default function ModalButton(){
    const [openModal, setOpenModal] = useState(false)
    const [form, setForm] = useState<FormData>({cliente: '', quant: ''})

    async function criar(data:FormData){
        console.log("qqrCoisa")
        try {
            axios({
                method: "post",
                url: "http://localhost:3001/criar",
                data: {
                  cliente: data.cliente,
                  quant: parseInt(data.quant)
                },
              }).then(()=> setForm({cliente: '', quant: ''}))
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (data: FormData) => {
        try {
            criar(data)
            console.log("Função CRIAR executada")
        } catch (error) {
            console.log(error)
        }
    }

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
            <div className="modal_input">
                <p>Adicionar pessoa a fila</p>
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSubmit(form)
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

