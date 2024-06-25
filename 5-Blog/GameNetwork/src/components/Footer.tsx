//-- GERAL
import React from 'react';
import { createClient } from '@/prismicio';
//-- COMPONENTS
import NavBar from './NavBar';
import Typo from './Text';


//-- FUNCTION
export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('footer');

  return (
    <footer className='flex flex-row justify-between min-h-18 px-2 py-2 bg-lime-950 text-xs text-white'>

      <div className='inline-flex flex-col'>
        <Typo as='p'>{footer.data.termos}</Typo>
      </div>

      <NavBar tipo='footer' />
      

    </footer>
  );
};