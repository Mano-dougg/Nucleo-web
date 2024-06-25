"use client"
import React from 'react';
import { useModal } from '../contexts/ModalContexts';
import Tabela from '../components/Tabela';
import Cadastro from '../components/Cadastro';
import Update from '../components/Update';

export default function page() {
  const { ModalUm, ModalDois } = useModal();


  return (
    <main className='flex flex-col items-center '>
      <Tabela />

      {ModalUm ? (
        <Cadastro className='transition-opacity z-50 pointer-events-auto' />
      ) : (
        <Cadastro className='opacity-0 -z-10' />
      )}

      {ModalDois  ? (
        <Update className='transition-opacity z-50 pointer-events-auto' />
      ) : (
        <Update className='opacity-0 -z-10' />
      )}

    </main>
  )
}
