import React from 'react';

type Props = {
  sumPrice: number;
};

const Order = ({ sumPrice }: Props) => {
  return (
    <div className='bg-[#CBE8CA] xl:min-w-[465px]  xl:min-h-[250px] min-h-[191px] border-[1px] border-black flex sm:px-6 pb-2 px-2 text-[16px] sm:text-[24px] min-w-[264px] self-center'>
      <div className='flex flex-col justify-around w-full'>
        <p className='text-left justify-self-end font-bold'> Resumo do Pedido</p>
        <p className=' font-bold text-right'>R${(sumPrice / 100)?.toFixed(2)}</p>
        <button className='text-white self-center bg-black rounded-[60px] min-w-[60%] px-2 '> Comprar Agora </button>
      </div>
    </div>

  );
};

export default Order;
