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
    <div className='bg-white border-[1px] border-black flex gap-5 py-3'>
      <img src={imgUrl} alt={name} className='' />

      <div className='flex flex-col gap-5 justify-between'>
        <p className='text-left'>{name}</p>
        <p className='text-left'>Tam: {size}</p>

        <div className='flex items-center justify-between '>
          <p className='font-bold hidden sm:flex'>R${price.toFixed(2)}</p>
          <select
            value={quantity}
            onChange={handleQuantityChange}
            className='border-[1px] border-black px-4 py-1 rounded-[60px] '
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                qnt={i + 1}
              </option>
            ))}
          </select>
          <img src='trash-2.svg' alt='trash' />
        </div>
      </div>
    </div>
  );
};

export default Product;
