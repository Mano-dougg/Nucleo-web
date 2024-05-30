import React from 'react';
import Image from 'next/image';
// ASSETS
import iconHome from '@/assets/home.png';
import iconSearch from '@/assets/search.png';

export default function Header(): JSX.Element {
  return (
    <header className='flex justify-between py-4 px-5 bg-lime-950 text-white'>
      <Image src={iconHome} alt='icone de home'/>
      <h2>
        <span className='font-extrabold text-lime-500'>Game</span>Network
      </h2>
      <Image src={iconSearch} alt='icone de pesquisa'/>
    </header>
  )
};