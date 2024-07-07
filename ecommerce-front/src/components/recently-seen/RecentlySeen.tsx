import React, { useEffect, useState } from 'react';
import Product from './Product';

interface Products {
  title: string;
  image: string;
  currentPrice: number;
}

const RecentlySeen = () => {
  const [queue, setQueue] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/product');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const storedIdsString = sessionStorage.getItem('productsIds');
        const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];

        const filteredProducts = storedIds.map((id: any) => 
          data.find((item: { id: any; }) => item.id === id)
        ).filter(Boolean); 

        setQueue(filteredProducts.slice(-3)); 
       

      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='flex flex-col items-center space-y-10 sm:text-[32px] text-[16px] font-bold mx-auto w-[80%]'>
      <p className='self-start sm:text-4xl text-[24px] font-bold'>
        Visto Recentemente
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-[110px] gap-10 mb-8'>
        {queue.map((product, index) => (
          <Product key={index} name={product.title} imgUrl={product.image} price={product.currentPrice} />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full mt-6'>
          <button className='bg-black text-white rounded-[60px] sm:text-[24px] px-8 py-2'>
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlySeen;
