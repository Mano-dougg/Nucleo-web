import React, { useState, useEffect } from 'react';
import Product from './Product';

interface Products {
  id: number;
  title: string;
  image: string;
  currentPrice: number;
  categoryId: number;
  style: string;
  fitting: string;
}

const ProductsSaleQueue = ({ selectedCategory, selectedStyle, selectedFitting, searchProduct }: any) => {
  const [queue, setQueue] = useState<Products[]>([]);
  const [queueLength, setQueueLength] = useState<number>(4);
  console.log(selectedStyle)

  const addToQueue = () => {
    setQueueLength((prevCount) => prevCount + 2);
  };

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
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredQueue = queue

    .filter((product) => !selectedCategory || product.categoryId === Number(selectedCategory))
    .filter((product) => !selectedStyle || product.style.toLocaleLowerCase() === selectedStyle)
    .filter((product) => !selectedFitting || product.fitting.toLocaleLowerCase() === selectedFitting)
    .filter((product) => !searchProduct || product.title.toLowerCase().includes(searchProduct.toLowerCase()
)
);


  return (
    <div className='flex sm:mt-[120px] mt-[75px] flex-col items-center space-y-10 sm:text-[24px] text-[16px] font-bold sm:w-[95%] w-[80%]  mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-20 mb-8 min-w-[190px] w-full '>
        {filteredQueue.slice(0, queueLength).map((product) => (
          <Product
            key={product.id}
            name={product.title}
            imgUrl={product.image}
            price={product.currentPrice}
            id={product.id}
          />
        ))}
        <div className='flex sm:justify-self-end justify-center col-span-full mt-6'>
          <button
            onClick={addToQueue}
            className='bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] px-8 py-2'
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSaleQueue;