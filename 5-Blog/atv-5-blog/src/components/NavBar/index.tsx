import React from 'react';

export default function NavBar(): JSX.Element {
  return (
    <div id='nav-bar' className='flex justify-evenly mt-2 text-white'>
      <a className='text-xl font-bold' href='/'>
        Notícias
        <hr className='w-full border-red-500 border-2' />
      </a>
      <a className='text-xl font-bold' href='/'>
        Jogos
        <hr className='w-full border-blue-500 border-2' />
      </a>
      <a className='text-xl font-bold' href='/'>
        Filmes
        <hr className='w-full border-yellow-500 border-2' />
      </a>
      <a className='text-xl font-bold' href='/'>
        Séries
        <hr className='w-full border-purple-500 border-2' />
      </a>
    </div>
  )
};