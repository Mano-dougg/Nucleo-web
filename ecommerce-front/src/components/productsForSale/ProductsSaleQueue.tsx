import React, { useState, useEffect } from 'react';
import Product from './Product';

interface Product {
  id: number;
  title: string;
  image: string;
  currentPrice: number;
}

const ProductsSaleQueue = () => {
  const [queue, setQueue] = useState<Product[]>([]);
  queue.length = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/product'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQueue(data);
      } catch (error) {
      } 
    };

    fetchProducts();
  }, []); 

  return (
    <div className='flex sm:mt-[150px] mt-[75px] flex-col items-center space-y-10 sm:text-[24px] text-[16px] font-bold sm:w-[95%]  w-[80%] mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-8'>
        {queue.map((product) => (
          <Product
            key={product.id}
            name={product.title}
            imgUrl={product.image}
            price={product.currentPrice}
          />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full mt-6'>
          <button className='bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] px-8 py-2'>
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSaleQueue;
