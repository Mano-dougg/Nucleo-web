/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
  name: string;
  imgUrl: string;
  price: number;
};

const Product = ({ name, imgUrl, price }: Props) => {
  return (
    <div className='bg-white  border-[1px] border-black flex flex-col justify-around gap-4 py-10 sm:px-7  px-3  w-auto'>
      <div className='flex flex-col items-center justify-center'>
        <img src={imgUrl} alt={name} className='sm:w-[254px] sm:h-[321px] w-[111px] h-[113px] object-cover ' />
        <p className='text-center  mt-4 truncate'>{name}</p>
      </div>
      <div className='flex items-center sm:justify-center justify-center gap-3'>
        <img src='trending-down (1).svg' alt=''></img>
        <p className='text-red-600 font-bold'>R${(price/100).toFixed(2)}</p>
        <img src='shopping-cart.svg' alt='Ícone do carrinho' className='sm:w-12 sm:h-12 w-6 h-6 ml-5' />
      </div>
    </div>
  );
};

export default Product;
