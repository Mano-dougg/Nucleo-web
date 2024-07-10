import React, { useState } from 'react';
import Product from './Product';
import Order from './Order';
import EmptyCar from './EmptyCar';

interface Product {
  name: string;
  size: "P" | "M" | 'G';
  imgUrl: string;
  price: number;
}

const CarQueue = () => {
  const [queue, setQueue] = useState<Product[]>([
    { name: 'Vestido Longo Turquesa', imgUrl: 'URL.example', price: 110.00, size: 'M' },
  ]);

  return (
    <div className="flex mt-[50px] flex-col  sm:text-[24px] text-[24px] ">
      {queue.length === 0 ? (
        <EmptyCar />
      ) : (
        <>
          <p className="self-start text-[32px] font-bold mb-2">Itens no carrinho</p>
          <div className="grid grid-cols-1 gap-10 mb-8">
            {queue.map((product, index) => (
              <div key={index} className="flex flex-col xl:flex-row gap-5 items-center">
                <Product name={product.name} imgUrl={product.imgUrl} price={product.price} size={product.size} />
                <Order price={product.price} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CarQueue;
