
"use client"

import { useState } from "react"
import Modal from "./modal"
import './modal.css'

export default function ModalButton(){
    const [openModal, setOpenModal] = useState(false)

    return(
    <main>
        <div className="btnPessoas" >
            <button onClick={() => setOpenModal(true)}>
                + Adicionar pessoas a fila
            </button>
        </div>

        <div>
          <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
            <div>
                <p>Adicionar pessoa a fila</p>
                <input type="text" value="" placeholder='Nome Completo do Cliente'/>
                <input type="text" value="" placeholder='Total de Pães:' />
            </div>

          </Modal>
        </div>
    </main>
    )
}