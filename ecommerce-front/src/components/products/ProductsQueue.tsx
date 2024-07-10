import React, { useState } from "react";
import Product from "./Product";
import Link from "next/link";
import Button from "../Button";

interface Product {
  name: string;
  imgUrl: string;
}

const ProductsQueue = () => {
  const [queue, setQueue] = useState<Product[]>([
    { name: "Calças", imgUrl: "URL.example" },
    { name: "Vestidos", imgUrl: "Url.example" },
    { name: "Blusas", imgUrl: "URL.example" },
    { name: "Jaquetas", imgUrl: "URL.example" },
  ]);

  return (
    <div className='flex flex-col items-center mt-10 space-y-10 text-[24px] font-bold mb-10 w-[80%] mx-auto'>
      <p className='self-start sm:text-[36px] text-[24px] font-bold'>Produtos</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 max-w-4xl w-full'>
        {queue.map((product, index) => (
          <Product key={index} name={product.name} imgUrl={product.imgUrl} />
        ))}
        <div className="flex sm:justify-self-end justify-center col-span-full">
        <Button url="/produtos">Ver mais</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsQueue;
