/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  name: string;
  imgUrl: string;
  id: number;
};

const Product = ({ name, imgUrl, id }: Props) => {
  return (
    <div className='bg-white border-[1px] border-black flex flex-col items-center py-9 px-9 gap-4'>
      <img
        src={imgUrl}
        alt={name}
        style={{ width: '140px', height: '140px', objectFit: 'cover' }}
        className='rounded-full' 
      />
      <p className='text-center text-[16px] font-semibold'>{name}</p>
    </div>
  );
};

export default Product;
