import React from 'react';
import Image from 'next/image';
// COMPONENTS
import Card1 from '@/components/Card1';
// ASSETS
import iconFire from '@/assets/fire.png';
import carousel1 from '@/assets/carousel-1.png';



export default function Carousel(): JSX.Element {
  return (
    <div className='flex flex-col mx-7 mt-3 text-white'>
      <div className='flex-row flex-nowrap mb-3'>
        <Image className='inline mr-2' src={iconFire} alt='icone de fogo'/>
        <p className='inline font-semibold'>Em alta</p>
      </div>
      <Card1 src={carousel1} alt='imagem 1' title='Novo jogo baseado em LoveCraft' text='O novo jogo buscará mergulhar nos contos do autor e promete uma abordagem eletrizante' tag='jogos' />

    </div>
  )
};
