import React from 'react';
import Image from 'next/image';
// COMPONENTS
import NavBar from '@/components/NavBar' 
// ASSETS
import iconHome from '@/assets/home.png';
import iconSearch from '@/assets/search.png';

export default function Header(): JSX.Element {
  return (
    <header className='mb-5'>

      <div className='flex justify-between py-4 px-5 bg-lime-950 text-white'>
        <Image src={iconHome} alt='icone de home'/>
        <h2>
            <span className='font-extrabold text-lime-500'>Game</span>Network
        </h2>
        <Image src={iconSearch} alt='icone de pesquisa'/>
      </div>

      <NavBar />

    </header>
  )
};