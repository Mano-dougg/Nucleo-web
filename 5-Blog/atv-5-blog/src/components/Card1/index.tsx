import React from 'react';
import { StaticImageData } from 'next/image';
// COMPONENTS
import MiniTag from '@/components/MiniTags';

interface IProps {
  title?: string,
  text?: string,
  tag: 'noticias' | 'jogos' | 'filmes' | 'series',
};

export default function Card1(props: IProps): JSX.Element {
  return (
    <div className='inline-flex flex-col place-self-center min-w-76 min-h-73 px-2 py-4 rounded bg-blue-500'>
        <p className='text-base font-semibold'>{props.title}</p>
        <p className='text-xs mt-2 mb-3'>{props.text}</p>
        <MiniTag tag={props.tag} />
    </div>
  )
};