import React, { useState } from 'react';
import Product from './Product';
import Order from './Order';

interface Product {
  name: string;
  size: "P" | "M" | 'G';
  imgUrl: string;
  price: number;
}

const CarQueue = () => {
  const [queue, setQueue] = useState<Product[]>([
    { name: 'Vestido Longo Turquesa', imgUrl: 'URL.example', price: 110.00, size:'M' },
    
  

  ]);

  return (
    <div className='flex mt-[150px] flex-col items-center space-x-4 sm:text-[24px] text-[16px]  '>
      

      <div className='grid grid-cols-1 gap-10 mb-8  '>
        {queue.map((product, index) => (
          <>
          <div className='flex flex-col sm:flex-row gap-5 items-center'>
          <Product key={index} name={product.name} imgUrl={product.imgUrl} price={product.price} size={product.size} />
          <Order key={index} price={product.price} />
          </div>
          </>
        ))}
        
        </div>
      </div>
  );
};

export default CarQueue ;
