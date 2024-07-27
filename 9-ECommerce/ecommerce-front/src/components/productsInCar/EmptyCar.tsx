import React from 'react';
import Image from 'next/image';

const EmptyCar = () => {
  return (
    <div className="bg-white flex flex-col items-center p-2 sm:p-6 space-y-6">
      <div className="relative w-[79px] h-[49px] sm:w-[120px] sm:h-[120px]">
        <Image 
          src="/shopping-cart.svg" 
          alt="Shopping Cart" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
      <p className="mt-4 sm:text-[48px] font-semibold text-[20px]">SEU CARRINHO ESTÁ VAZIO</p>
      <p className="mt-2 text-center sm:text-[36px] text-[16px] text-[#4A4848]">
        Passe pelas seções e ache a roupa perfeita para você
      </p>
      <button className="mt-4 px-[33px] py-[8px] rounded-[60px] bg-black text-white text-[15px] sm:text-[24px]">
        Cadastre-se/Login
      </button>
      <button className="mt-2 px-[33px] py-[8px] rounded-[60px] bg-black text-white text-[15px] sm:text-[24px]">
        Homepage
      </button>
    </div>
  );
};

export default EmptyCar;
