/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
  name: string;
  imgUrl: string;
  price: number;
};

const Product = ({ name, imgUrl, price }: Props) => {
  return (
    <div className='bg-white  border-[1px] border-black flex flex-col justify-around gap-4 py-10 px-7 w-auto'>
      <div className='flex flex-col items-center justify-center'>
        <img src={imgUrl} alt={name} className='' />
        <p className='text-center mt-4'>{name}</p>
      </div>
      <div className='flex items-center justify-center gap-3'>
        <img src='trending-down.svg' alt=''></img>
        <p className='text-red-600 font-bold'>R${price.toFixed(2)}</p>
        <img src='shopping-cart.svg' alt='Ícone do carrinho' className='w-6 h-6' />
      </div>
    </div>
  );
};

export default Product;
