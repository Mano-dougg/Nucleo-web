import React, { useState, useEffect } from 'react';
import Product from './Product';

interface Category {
  id: number;
  name: string;
  image: string;
  products: Array<any>;
}

const ProductsQueue = () => {
  const [queue, setQueue] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3001/category');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const categories = await response.json();
        console.log(categories)

        setQueue(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className='flex flex-col items-center mt-10 space-y-10 text-[24px] font-bold mb-10 w-[85%] mx-auto'>
      <p className='self-start sm:text-[36px] text-[24px] font-bold'>Produtos</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 max-w-5xl w-full'>
        {queue.map((category) => (
          <Product key={category.id} id={category.id} name={category.name} imgUrl={category.image} />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full'>
          <button className='bg-black text-white rounded-[60px] text-[24px] px-8 py-2'>
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsQueue;
