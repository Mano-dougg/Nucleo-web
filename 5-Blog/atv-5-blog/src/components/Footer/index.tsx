import React from 'react';
import Image from 'next/image';
// ASSETS
import iInsta from '@/assets/instagram.png';
import iMail from '@/assets/envelope.png';

export default function Footer() {
  return (
    <footer className='flex flex-row justify-between min-h-18 px-2 py-2 bg-lime-950 text-xs text-white'>
      <div className='inline-flex flex-col'>
        <p>Todos os direitos reservados</p>
      </div>
      <div className='inline-flex flex-col'>
        <a className='inline-flex gap-1' href='/' target='_blank'>
          <Image src={iInsta} alt='icone do instagram'/>
          @GameNetwork
        </a>
        <a className='inline-flex gap-1' href='/' target='_blank'>
          <Image src={iMail} alt='icone do e-mail'/>
          GameNetwork@outlook.com
        </a>
      </div>
    </footer>
  )
};