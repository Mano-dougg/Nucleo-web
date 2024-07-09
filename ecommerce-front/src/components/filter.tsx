import React, { useState } from 'react';

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className='sm:bg-[#CBE8CA] p-2'>
      <div className='hidden sm:flex flex-col'>
        <div className='flex flex-col items-center mb-4'>
          <p className='mb-4 font-bold text-[36px]'>Filtro</p>
          <p className='mb-2 text-[32px]'>Categoria</p>
        </div>
        <div className='flex-col flex gap-6 items-start ml-2 mb-6'>
          <label className='flex items-center justify-between gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Calças</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Blusas</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Jaquetas</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Vestidos</span>
          </label>
        </div>

        <div className='flex flex-col items-center mt-4 mb-4'>
          <p className='mb-2 text-[32px]'>Estilo</p>
        </div>
        <div className='flex-col flex gap-6 items-start ml-3 mb-6'>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Casual</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Street</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Sensual</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Social</span>
          </label>
        </div>

        <div className='flex flex-col items-center mt-4 mb-4'>
          <p className='mb-2 text-[32px]'>Caimento de Peça</p>
        </div>
        <div className='flex-col flex gap-6 items-start ml-3 mb-6'>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Oversize</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Skinny</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Solto</span>
          </label>
          <label className='flex items-center gap-5'>
            <input type='checkbox' className='form-checkbox w-12 h-12 border border-gray-500' />
            <span className='ml-2 mr-2 text-left text-[24px]'>Slim Fit</span>
          </label>
          <button className='bg-black text-white rounded-[60px] text-[24px] px-8 py-2 self-center mt-10'>
            Ver mais
          </button>
        </div>
      </div>
      
      <div className='sm:hidden flex flex-col mt-20'>
        <select
          className='form-select min-w-[190px] py-3  border-black  border-[1px]  text-[24px] text-center'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option className='' value='' >Filtro</option>
          <option value='calcas'>Calças</option>
          <option value='blusas'>Blusas</option>
          <option value='jaquetas'>Jaquetas</option>
          <option value='vestidos'>Vestidos</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
