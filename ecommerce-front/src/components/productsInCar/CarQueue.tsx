import React, { useState, useEffect } from 'react';
import Product from './Product';
import EmptyCar from './EmptyCar';
import Order from './Order';

interface Product {
  name: string;
  imgUrl: string;
  price: number;
  size: string[];
  title: string;
  image: string;
  currentPrice: number;
}

const CarQueue = ({ products }) => {
  const [ data, setData ] = useState<Product[]>([]);

  useEffect(() => {
    const populateCarProducts = async (products, parsedProducts: number[]) => {
      products?.forEach((product) => {
        const parsedId = parseInt(product?.id, 10);
        if (parsedProducts.includes(parsedId)) {
          setData([ ...data, product ]);
        }
      });
    };

    if (typeof window !== undefined) {
      const carrinhoProducts = localStorage.getItem('carrinho');
      if (carrinhoProducts) {
        try {
          const parsedProducts = JSON.parse(carrinhoProducts);
          populateCarProducts(products, parsedProducts);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, [ products ]);

  const sumPrice = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.currentPrice,
    0
  );

  return (
    <div className="flex mt-[50px] flex-col  sm:text-[24px] text-[24px] ">
      {data?.length === 0 ? (
        <EmptyCar />
      ) : (
        <>
          <p className="self-start sm:text-[32px] font-bold mb-2">Itens no carrinho</p>
          <div className="flex flex-col gap-16 mb-8">
            {data?.map((product, index) => (
              <div key={index} className="flex flex-col xl:flex-row gap-5 items-center mb-5">
                <Product
                  name={product.title}
                  imgUrl={product.image}
                  price={product.currentPrice / 100}
                  size={product.sizes.join('-')}
                />
              </div>
            ))}
            <Order sumPrice={sumPrice} />
          </div>
        </>
      )}
    </div>
  );
};

export default CarQueue;
