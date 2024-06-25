import React from 'react';
import { createClient } from '@/prismicio';
// COMPONENTS
import Typo from './Text';
import NavBar from './NavBar';
// ASSETS
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";


export default async function Header() {

  return (
    <header className='
    flex flex-col
    w-auto gap-7 
    text-white'>
      <div className='
      flex justify-between 
      py-4 px-5 
      bg-primary1'>
        <a>
          <AiOutlineHome />
        </a>

        <Typo as='h2'>
          <span className='font-extrabold text-primary3'>Game</span>Network
        </Typo>

        <AiOutlineSearch />
      </div>

      <NavBar />
      
    </header>
  );
};