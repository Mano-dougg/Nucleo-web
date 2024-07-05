import React, { useState } from 'react';
import Product from './Product'; 

interface Product {
  name: string;
  imgUrl: string;
}

const ProductsQueue = () => {
  const [queue, setQueue] = useState<Product[]>([
    { name: 'Calças', imgUrl: 'URL.example' },
    { name: 'Vestidos', imgUrl: 'Url.example' },
    { name: 'Blusas', imgUrl: 'URL.example' },
    { name: 'Jaquetas', imgUrl: 'URL.example' },
  ]);

  return (
    <div className='flex flex-col mt-10 space-y-10 text-[24px] font-bold mb-10 '>
      <p className='sm:text-[36px] text-[24px] font-bold '>Produtos</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 '>
        {queue.map((product, index) => (
          <Product key={index} name={product.name} imgUrl={product.imgUrl} />
        ))}
      </div>

      <div className='flex sm:justify-end justify-center'>
        <button className=' bg-black text-white rounded-[60px] text-[24px] px-8 py-2'>
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default ProductsQueue;
