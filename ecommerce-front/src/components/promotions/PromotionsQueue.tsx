import React, { useState } from 'react';
import Product from './Product';

interface Product {
  name: string;
  imgUrl: string;
  price: number;
}

const PromotionQueue = () => {
  const [queue, setQueue] = useState<Product[]>([
    { name: 'Vestido Longo', imgUrl: 'URL.example', price: 90 },
    { name: 'Tênis Feminino', imgUrl: 'Url.example', price: 70 },
    { name: 'Moletom Feminino', imgUrl: 'URL.example', price: 100 },
  ]);

  return (
    <div className='flex flex-col items-center space-y-10 sm:text-[32px] text-[16px] font-bold w-[80%] mx-auto'>
      <p className='self-start sm:text-4xl text-[24px] font-bold'>
        Promoções
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl w-full'>
        {queue.map((product, index) => (
          <Product key={index} name={product.name} imgUrl={product.imgUrl} price={product.price} />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full mt-6'>
          <button className='bg-black text-white rounded-[60px] text-[24px] px-8 py-2'>
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionQueue;
