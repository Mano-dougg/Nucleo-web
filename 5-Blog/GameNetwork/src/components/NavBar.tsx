//-- GERAL
import React from 'react';
import { createClient } from '@/prismicio';
//-- COMPONENTs
import { PrismicNextLink } from '@prismicio/next';
import ISocial from './LinkRedes';
//-- TYPEs
type NBProps = {
  tipo?: 'header' | 'footer',
}


// -- FUNCTION
export default async function NavBar({ tipo }: NBProps) {
  const client = createClient();

  if (tipo === 'footer') {
    const footer = await client.getSingle('footer');
    return (
      <nav className='inline-flex flex-col'>
        <ul>

          {footer.data.contatos.map(({label, link, rede_social}) => {
            if (label) return (
            <li className='flex flex-col' key={label}>
              <PrismicNextLink className='flex gap-1 text-xs font-bold text-white' field={link} >

                {rede_social && ISocial(rede_social)}

                {label}

              </PrismicNextLink>
            </li>
          )})}

        </ul>
      </nav>
    )

  } else {
    const settings = await client.getSingle('settings');
    return (
      <nav id='nav-bar'>
        <ul className='flex justify-evenly'>

          {settings.data.navigation.map(({link, label_text, label_color}) => (
            <li className='inline-flex' key={label_text}>
              <PrismicNextLink className='text-xl font-bold text-white' field={link}>

                {label_text}

                <hr className='w-full border-2 rounded' style={{ borderColor: label_color?.valueOf() || '#ffffff' }}/>

              </PrismicNextLink>
            </li>
          ))}

        </ul>
      </nav>
    );
  };
};
