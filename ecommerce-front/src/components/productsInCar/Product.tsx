/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

type Props = {
  name: string;
  imgUrl: string;
  price: number;
  size: 'P' | 'M' | 'G';
};

const Product = ({ name, imgUrl, price, size }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className='bg-white border-[1px] border-black flex gap-5 py-3 px-5 xl:min-w-[708px] xl:min-h-[310px] sm:text-[24px] text-[16px]'>
      <img src={imgUrl} alt={'vestido'} className='max-w-60 max-h-60' />

      <div className='flex flex-col gap-5 justify-between w-full'>
        <p className='text-left'>{name}</p>
        <p className='text-left hidden sm:flex'>Tam: {size}</p>

        <div className='flex items-center justify-between w-full flex-wrap'>
          <p className='font-bold '>R${(price).toFixed(2)}</p>
          <select
            value={quantity}
            onChange={handleQuantityChange}
            className='border-[1px] border-black px-4 py-1 rounded-[60px]'
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                qty={i + 1}
              </option>
            ))}
          </select>
          <img src='trash-2.svg' alt='trash' className='w-6 h-6 sm:w-8 sm:h-8' />
        </div>
      </div>
    </div>
  );
};

export default Product;
