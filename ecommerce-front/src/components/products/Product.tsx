/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
  name: string;
  imgUrl: string;
  id: number;
};

const Product = ({ name, imgUrl, id }: Props) => {
  return (
    <div className='bg-white border-[1px] border-black items-center flex flex-col justify-around py-9 px-9 gap-9'>
      <img
        src={imgUrl}
        alt={name}
        style={{ width: '140px', height: '140px', objectFit:'cover' }}
        className='rounded-[120px]'
      />
      <p>{name}</p>
    </div>
  );
};

export default Product;
