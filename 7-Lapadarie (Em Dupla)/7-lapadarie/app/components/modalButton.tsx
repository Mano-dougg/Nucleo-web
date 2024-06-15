"use client"

import { useEffect, useState } from "react"
import Modal from "./modal"
import './modal.css'
import axios from "axios"
import Tabela from "./tabela"
import { Pedido } from "@prisma/client"

interface FormData{
    cliente: string,
    quant: string,
}

export default function ModalButton(){
    const [openModal, setOpenModal] = useState(false)
    const [form, setForm] = useState<FormData>({cliente: '', quant: ''})
    const [pedidos, setPedidos] = useState<Pedido[]>([])

    async function criar(data:FormData){
        console.log("qqrCoisa")
        try {
            await axios({
                method: "post",
                url: "http://localhost:3001/criar",
                data: {
                  cliente: data.cliente,
                  quant: parseInt(data.quant)
                },
              })
              setForm({cliente: '', quant: ''})
              fetchPedidos()
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchPedidos(){
        console.log("RODANDO FUNÇÃO PEDIDOS")
        try {
            const resposta = await axios({
                method: "get",
                url: "http://localhost:3001/pedidos",
              })
              setPedidos(resposta.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPedidos()
    }, [])

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
        <Tabela pedidos={pedidos} fetchPedidos={fetchPedidos} />

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

