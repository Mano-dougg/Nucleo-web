import React, { useEffect, useState } from 'react';
import Product from './Product';

interface Product {
  id:number
  title: string;
  image: string;
  currentPrice: number;
  inPromotion:boolean;
}

const PromotionQueue = () => {
  const [queue, setQueue] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/product');
        const data = await response.json();
        
        const products = data.filter((item: any) => item.inPromotion);
        console.log(products)
        
       

        setQueue(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } 
    };

    fetchProducts();
  }, []);

   

  return (
    <div className='flex flex-col items-center space-y-10 sm:text-[32px] text-[16px] font-bold w-[85%] mx-auto'>
      <p className='self-start sm:text-4xl text-[24px] font-bold'>
        Promoções
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 max-w-5xl w-full'>
        {queue.map((product, index) => (
          <Product key={product.id} name={product.title} imgUrl={product.image} price={product.currentPrice} />
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