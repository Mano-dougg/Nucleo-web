import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import clsx from 'clsx';
import React from 'react'
import Text from './Text';
import MiniTag from './MiniTag';
import { ImageFieldImage, KeyTextField, LinkField } from '@prismicio/client';


interface CdProps {
  id?: string;
  className?: string;
  tipo?: '1' | '2';
  titulo?: KeyTextField;
  resumo?: KeyTextField;
  link?: LinkField;
  autor?: KeyTextField;
  data?: KeyTextField;
  imagem?: ImageFieldImage;
  tag: 'Jogos' | 'Filmes' | 'Séries';
}

export default function Card({
  id,
  className,
  tipo,
  titulo,
  resumo,
  link,
  autor,
  data,
  imagem,
  tag,
  ...restProps
}: CdProps ) {

  if (tipo === '2') {

    <li id={id} className={ clsx('inline-flex flex-col place-self-center justify-end w-96 h-56 rounded-lg', className) } {...restProps} >
      <PrismicNextLink className='flex relative z-10 top-1 flex-col w-auto h-auto px-2 py-4 gap-1 text-white' field={link}>
        <Text as='h3'>
          {titulo}
        </Text>
        <Text as='p'>
          {resumo}
        </Text>
        <MiniTag tag={tag} />
      </PrismicNextLink>
      <PrismicNextImage
      // removeWrapper
      field={imagem}
      className='absolute z-0 w-96 h-56 rounded-xl object-cover'/>
    </li>

  } else {

    return (

      <li id={id} className={clsx('md:max-w-[320px]', className) } {...restProps}>
        <PrismicNextLink className='grid sm:max-md:grid-cols-12  w-full max-w-[640px] h-max p-4 gap-1
        bg-slate-100 rounded-xl shadow-lg 
        md:grid-rows-12 md:max-w-[320px]' field={link}>
          <div className="sm:max-md:col-span-6 inline-flex flex-col justify-between md:order-1 md:row-span-6">
          {/* Titulo & Texto */}
            <div className='flex flex-col gap-2'>
              {/* Titulo */}
              <Text as='h3'>
                {titulo}
              </Text>
              {/* Texto */}
              <Text as='p' className="max-h-20 overflow-hidden">
              {resumo}
              </Text>
            </div>
            {/* Autor & Data */}
            <div className="flex justify-between md:mt-8">
              {/* Autor */}
              <Text as='h6'>{autor}</Text>
              {/* Data */}
              <Text as='h6'>{data}</Text>
            </div>
          </div>
          {/* Imagem & Tag */}
          <div className="sm:max-md:col-span-3 inline-flex flex-col items-end gap-2 md:order-0 md:row-span-5 md:items-start">
            {/* Imagem */}
            <PrismicNextImage className="w-40 aspect-video rounded-lg md:w-full" field={imagem} />
            {/* Tag */}
            <MiniTag tag={tag} />
          </div>
        </PrismicNextLink>
      </li>
    )
  }
}