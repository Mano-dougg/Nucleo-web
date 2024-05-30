import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface IProps {
  src: StaticImageData,
  title: string,
  sectitle?: string,
  text: string,
  sectitletwo?: string,
  texttwo?: string
}

export default function Arts(props: IProps) {
  return (
    <div className='flex flex-col rounded w-5/6 h-max m-auto mb-4 p-4 gap-4 md:gap-8 bg-white'>
      <div className='flex flex-col gap-2 md:gap-4'>
        <h2 className='text-base md:text-4xl text-extrabold'>{props.title}</h2>

        <Image className='m-auto' src={props.src} alt='.' /> 
      </div>

      <h3 className='text-base md:text-4xl text-extrabold'>{props.sectitle}</h3>

      <p className='w-auto text-xs md:text-2xl text-medium'>{props.text}</p>

      <h3 className='text-base md:text-4xl text-extrabold'>{props.sectitletwo}</h3>

      <p className='text-xs md:text-2xl text-medium'>{props.texttwo}</p>
    </div>
  )
}
