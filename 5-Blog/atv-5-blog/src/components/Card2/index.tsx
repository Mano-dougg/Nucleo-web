import React from 'react';
import Image from 'next/image';
// COMPONENTS
import MiniTag from '@/components/MiniTags';

interface IProps {
  src: any,
  alt: string,
  title?: string,
  text?: string,
  author?: string,
  date?: string,
  tag: 'noticias' | 'jogos' | 'filmes' | 'series',
};

export default function Card2(props: IProps) {
  return (
    <div className='flex flex-row sm:flex-col-reverse flex-nowrap w-83 sm:w-96 h-40 sm:h-max justify-between rounded mx-4 px-2 py-3 gap-2 bg-white text-black'>

      <div className='inline-flex flex-col justify-between align-items-baseline text-xs'>
        <div>
          <p className='text-base font-bold'>{props.title}</p>
          <p className='text-xs'>{props.text}</p>
        </div>

        <div className='inline-flex justify-between'>
          <p>{props.author}</p>
          <p>{props.date}</p>
        </div>
      </div>

      <div className='inline-flex flex-col justify-between'>
        <Image className='min-w-36' src={props.src} alt={props.alt} />
        <MiniTag tag={props.tag} />
      </div>

    </div>
  )
};
