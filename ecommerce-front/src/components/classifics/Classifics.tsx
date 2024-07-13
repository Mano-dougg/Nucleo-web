import React from 'react';

const Classifics = () => {
  return (
    <div className='sm:flex hidden flex-wrap text-[12px] gap-12'>
      <select className='bg-white rounded-[30px] border-[1px] border-black text-black  px-1 py-3 m-2'>
        <option className=''> Classific: Mais votados</option>
        <option className='font-bold text-center'>Mais votados</option>
      </select>

      <button className='bg-white rounded-[30px] border-[1px] border-black text-black px-6 py-3 m-2'>
        Envio Nacional
      </button>

      <button className='bg-white rounded-[30px] border-[1px] border-black text-black px-6 py-3 m-2'>
        Promoções
      </button>

      <button className='bg-white rounded-[30px] border-[1px] border-black text-black px-6 py-3 m-2'>
        Coleções
      </button>

      <select className='bg-white rounded-[30px] border-[1px] border-black text-black px-3 py-3 m-2'>
        <option>Mais</option>
      </select>
    </div>
  );
}

export default Classifics;
