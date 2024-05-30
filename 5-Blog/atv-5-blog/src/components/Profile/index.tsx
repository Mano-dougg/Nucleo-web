import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface IProps {
  src: StaticImageData,
  alt: string | '',
  name?: string,
  about?: string,
}

export default function Profile(props: IProps) {
  return (
    <div className='inline-flex flex-row items-center gap-4'>
      <Image src={props.src} alt={props.alt}/>
      <div>
        <h2 className='text-3xl font-bold'>{props.name}</h2>
        <p>{props.about}</p>
      </div>
      
    </div>
  )
}
