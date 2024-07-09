import React, { useState } from 'react';
import Product from './Product';

interface Product {
  name: string;
  imgUrl: string;
  price: number;
}

const ProductsSaleQueue = () => {
  const [queue, setQueue] = useState<Product[]>([
    { name: 'Camisa feminina de manga curta', imgUrl: 'URL.example', price: 48.99 },
    { name: 'Calça Masculina Estampada', imgUrl: 'Url.example', price: 129.99 },
    { name: 'Jaqueta jeans feminina', imgUrl: 'URL.example', price: 149.99 },
    { name: 'Vestido Floral', imgUrl: 'URL.example', price: 149.99 },

  ]);

  return (
    <div className='flex sm:mt-[150px] mt-[75px] flex-col items-center space-y-10 sm:text-[24px] text-[16px] font-bold sm:w-[95%]  w-[80%] mx-auto'>
      

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-8   '>
        {queue.map((product, index) => (
          <Product key={index} name={product.name} imgUrl={product.imgUrl} price={product.price} />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full mt-6'>
          <button className='bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] px-8 py-2 '>
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSaleQueue ;
