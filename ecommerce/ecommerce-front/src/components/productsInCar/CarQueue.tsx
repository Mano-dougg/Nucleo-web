import React, { useState, useEffect } from 'react';
import Product from './Product';
import EmptyCar from './EmptyCar';
import Order from './Order';

interface Product {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  size: string[];
  title: string;
  image: string;
  currentPrice: number;
}

const CarQueue = ({ products }: any) => {
  const [data, setData] = useState<Product[]>([]);
  console.log(data);
  console.log(products);

  useEffect(() => {
    try {
      const carrinhoProducts = sessionStorage.getItem('cartIds') || '';
      const carrinhoIds: string[] = JSON.parse(carrinhoProducts);

      const filteredProducts = products.filter(item => carrinhoIds.includes(item.id));
      setData(filteredProducts);
    } catch (err) {
      console.log(err);
    }
  }, [products]);

  const sumPrice = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.currentPrice,
    0
  );

  return (
    <div className="flex mt-[50px] flex-col sm:text-[24px] text-[24px]">
      {data?.length === 0 ? (
        <EmptyCar />
      ) : (
        <>
          <p className="self-start sm:text-[32px] font-bold mb-2">Itens no carrinho</p>
          <div className="flex flex-col lg:flex-wrap gap-16 mb-8 items-center">
            {data?.map((product, index) => (
              <div key={index} className="flex flex-col xl:flex-row gap-5 items-center mb-5">
                <Product
                  name={product.title}
                  imgUrl={product.image}
                  price={product.currentPrice / 100}
                  size={product.sizes.join('-')}
                />
                {data.length === 1 && (
                  <Order sumPrice={sumPrice} />
                )}
              </div>
            ))}
            {data.length > 1 && (
              <Order sumPrice={sumPrice} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CarQueue;
