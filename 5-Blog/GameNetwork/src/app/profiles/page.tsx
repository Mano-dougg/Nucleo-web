//-- GERAL
import React from 'react';
import { createClient } from '@/prismicio';
//-- COMPONENTs
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import PagePS from '@/components/PagePS';
import Carrossel from '@/components/Carousel';
import Text from '@/components/Text';


//-- FUNCTION
export default async function Maria() {
  //- Geral
  const client = createClient();
  const mariaOliveira = await client.getByUID('criadores', 'maria-oliveira');

  return (
    <PagePS className='
    flex flex-col content-center
    max-w-1/2
    '>

      <div className='
        flex flex-row
        my-8 mx-auto gap-8
      '>
        <PrismicNextImage field={mariaOliveira.data.avatar} />
        <div className='
          flex flex-col justify-center gap-4 text-white
        '>
          <Text as='h1'>
            {mariaOliveira.data.nome}
          </Text>
          <PrismicRichText field={mariaOliveira.data.sobre} />
        </div>
      </div>

      <Carrossel filtro='Maria Oliveira' />

      
    </PagePS>
  );
};
