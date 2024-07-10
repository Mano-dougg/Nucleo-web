import React from 'react';
import Image from 'next/image';

const EmptyCar = () => {
  return (
    <div className="bg-white flex flex-col items-center p-6 space-y-6 ">
      <Image 
        src="/shopping-cart.svg" 
        alt="Shopping Cart" 
        width={120} 
        height={120}
      />
      <p className="mt-4 text-[48px] font-semibold">SEU CARRINHO ESTÁ VAZIO</p>
      <p className="mt-2 text-center text-[36px] text-[#4A4848]">
        Passe pelas seções e ache a roupa perfeita para você
      </p>
      <button className="mt-4 px-[33px] py-[8px] rounded-[60px]  bg-black text-white">
        Cadastre-se/Login
      </button>
      <button className="mt-2 px-[33px] py-[8px]  rounded-[60px]  bg-black text-white">
        Homepage
      </button>
    </div>
  );
};

export default EmptyCar;
