import React from 'react';

type Props = {
  price: number;
};

const Order = ({price}: Props) => {
  return (
    <div className='bg-[#CBE8CA] xl:min-w-[465px]   xl:min-h-[80%] min-h-[50%] border-[1px] border-black flex px-6 pb-2  text-[16px] sm:text-[24px]'>
      <div className='flex flex-col justify-around w-full'>
        <p className='text-left justify-self-end font-bold'> Resumo do Pedido</p>
        <p className=' font-bold text-right'>R${price.toFixed(2)}</p>
        <button className='text-white self-center bg-black rounded-[60px] min-w-[60%] px-2 '> Comprar Agora </button>
        </div>
      </div>
        
      

  );
};

export default Order;
