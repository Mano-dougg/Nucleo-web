/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'

type Props = {
  name: string;
  imgUrl: string;
  price: number;
  link:string;
};

const Product = ({ name, imgUrl, price, link }: Props) => {
  return (
    <Link className='bg-white  border-[1px] border-black flex flex-col justify-around gap-4 sm:py-10 py-5 sm:px-7  px-3  w-auto' href={link}>
      <div className='flex flex-col items-center justify-center'>
        <img src={imgUrl} alt={name} className='sm:w-[254px] sm:h-[321px] w-[111px] h-[113px] object-cover ' />
        <p className='text-center  mt-4 truncate'>{name}</p>
      </div>
      <div className='flex items-center sm:justify-center justify-center gap-3'>
        <img src='trending-down (1).svg' alt=''></img>
        <p className='text-red-600 font-bold'>{`R$${(price/100).toFixed(2)}`}</p>
        <img src='shopping-cart.svg' alt='Ícone do carrinho' className='sm:w-12 sm:h-12 w-6 h-6 ml-10' />
      </div>
    </Link>
  );
};

export default Product;
