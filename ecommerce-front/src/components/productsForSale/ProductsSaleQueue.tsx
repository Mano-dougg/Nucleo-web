import React, { useState } from 'react';
import Product from './Product';
import Button from '../Button';

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
    <div className='flex mt-[150px] flex-col items-center space-y-10 sm:text-[24px] text-[16px] font-bold w-[95%] mx-auto'>
      

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-8 max-w-4xl w-full'>
        {queue.map((product, index) => (
          <Product key={index} name={product.name} imgUrl={product.imgUrl} price={product.price} />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full mt-6'>
        <Button url="/produtos">Ver mais</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSaleQueue ;
