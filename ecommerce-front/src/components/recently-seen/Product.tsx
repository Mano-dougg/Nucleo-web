/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
  name: string;
  imgUrl: string;
  price: number;
};

const Product = ({ name, imgUrl, price }: Props) => {
  return (
    <div className='bg-white  border-[1px] border-black flex flex-col justify-around gap-4  sm:py-6 py-5 sm:px-7 '>
      <div className='flex flex-col items-center justify-center'>
        <img src={imgUrl} alt={name} className='w-[113px] h-[113px] sm:w-[254px] sm:h-[321px]' />
        <p className='text-center  mt-4'>{name}</p>
      </div>
      <div className='flex items-center justify-around gap-3 flex-wrap'>
        <p className=' font-bold'>R${(price/100).toFixed(2)}</p>
        <img src='shopping-cart.svg' alt='Ícone do carrinho' className='w-6 h-6 sm:w-12 sm:h-12' />
      </div>
    </div>
  );
};

export default Product;
