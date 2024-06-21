"use client"
import {useState } from 'react'
import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
    

  export default  function modall() {
      const [modalIsOpen, setModalIsOpen] = React.useState(false);

      const customStyles = {
        content:{
            
        }
      }
    
      function openModal() {
        setModalIsOpen(true);
      }
    
      function closeModal() {
        setModalIsOpen(false);
      }


      const [name, setName] =useState<string>('');
      const [total, setTotal] =useState<number>(0);

      async function send(e: any) {
        e.preventDefault()

      const addPerson = await axios.post('http://localhost:3003/person' ,
        {
          name:name,
          bread_total: total
        }
      )
      }

      return (
        <div>
            <div>
          <button onClick={openModal} type='button'>+Adicionar pessoas na fila</button>
          <Modal className="Black"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            
            <h4>Adicionar pessoas na fila</h4>
          <form onSubmit={send}>
            <div className='Formulario'>
            <input placeholder='Nome completo do cliente'  onChange={(e:any)=>setName(e.target.value)} ></input>
            <input placeholder='Total de pães'  onChange={(e:any)=>{
              
              setTotal(e.target.value)}} ></input>
            </div>
            <div className='Botoes'>
              <div className='Botao1'>
            <button type='submit' onClick={ () => window.location.reload()}>Enviar</button>
            </div>
            <div className='Botao2'>
            <button onClick={closeModal} type='button'>Cancelar</button>
            </div>
            </div>

          </form>
          </Modal>
          </div>
        </div>
      );
    }
    