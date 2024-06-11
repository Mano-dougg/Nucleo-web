import React from 'react'
import './modal.css'

export default function Modal({isOpen, setModalOpen, children}){
    
    if(isOpen){
       return(
        <div className='modalOut'>
            <div className='modalIn'>
                <div className='modalConteudo'>
                    <div>   
                        {children}
                    </div>
                    
                    <div className='btnsModal'>
                        <button className='btnModalMarrom'>Enviar</button>
                        <button className='btnModal'onClick={setModalOpen}>Cancelar</button>
                    </div>

                </div>

            </div>
        </div>
    )} 

    return null
    }