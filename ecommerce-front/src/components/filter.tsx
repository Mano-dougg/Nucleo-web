import React, { useState } from 'react';

const Filter = ({ onCategoryChange }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedFitting, setSelectedFitting] = useState<string | null>(null);
  

  const handleCategoryChange = (e: any) => {
    const category = e.target.value;
    const newCategory = category === selectedCategory ? null : category;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory, selectedStyle, selectedFitting);
  };

  const handleStyleChange = (e: any) => {
    const style = e.target.value;
    const newStyle = style === selectedStyle ? null : style;
    setSelectedStyle(newStyle);
    onCategoryChange(selectedCategory, newStyle, selectedFitting);
  };

  const handleFittingChange = (e: any) => {
    const fitting = e.target.value;
    const newFitting = fitting === selectedFitting ? null : fitting;
    setSelectedFitting(newFitting);
    onCategoryChange(selectedCategory, selectedStyle, newFitting);
  };

  return (
    <div className='sm:bg-[#CBE8CA] p-2'>
      <div className='hidden sm:flex flex-col'>
        <div className='flex flex-col items-center mb-4'>
          <p className='mb-4 font-bold text-[36px]'>Filtro</p>
          <p className='mb-2 text-[32px]'>Categoria</p>
        </div>
        <div className='flex-col flex gap-6 items-start ml-2 mb-6'>
          <label className='flex items-center justify-between gap-5'>
            <input
              value='1'
              onChange={handleCategoryChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedCategory === '1'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Calças</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='2'
              onChange={handleCategoryChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedCategory === '2'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Blusas</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='3'
              onChange={handleCategoryChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedCategory === '3'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Jaquetas</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='4'
              onChange={handleCategoryChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedCategory === '4'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Vestidos</span>
          </label>
        </div>

        <div className='flex flex-col items-center mt-4 mb-4'>
          <p className='mb-2 text-[32px]'>Estilo</p>
        </div>
        <div className='flex-col flex gap-6 items-start ml-3 mb-6'>
          <label className='flex items-center gap-5'>
            <input
              value='casual'
              onChange={handleStyleChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedStyle === 'casual'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Casual</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='street'
              onChange={handleStyleChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedStyle === 'street'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Street</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='sensual'
              onChange={handleStyleChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedStyle === 'sensual'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Sensual</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='social'
              onChange={handleStyleChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedStyle === 'social'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Social</span>
          </label>
        </div>

        <div className='flex flex-col items-center mt-4 mb-4'>
          <p className='mb-2 text-[32px]'>Caimento de Peça</p>
        </div>
        <div className='flex-col flex gap-6 items-start ml-3 mb-6'>
          <label className='flex items-center gap-5'>
            <input
              value='oversize'
              onChange={handleFittingChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedFitting === 'oversize'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Oversize</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='skinny'
              onChange={handleFittingChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedFitting === 'skinny'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Skinny</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='loose'
              onChange={handleFittingChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedFitting === 'loose'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Solto</span>
          </label>
          <label className='flex items-center gap-5'>
            <input
              value='slimfit'
              onChange={handleFittingChange}
              type='checkbox'
              className='form-checkbox w-12 h-12 border border-gray-500'
              checked={selectedFitting === 'slimfit'}
            />
            <span className='ml-2 mr-2 text-left text-[24px]'>Slim Fit</span>
          </label>
          <button className='bg-black text-white rounded-[60px] text-[24px] px-8 py-2 self-center mt-10'>
            Ver mais
          </button>
        </div>
      </div>

     
      <div className='sm:hidden flex flex-col mt-20 gap-8'>
        <select
          className='form-select min-w-[190px] py-3 border-black border-[1px] text-[24px] text-center mb-4'
          onChange={handleCategoryChange}
        >
          <option value=''>Categoria</option>
          <option value='1'>Calças</option>
          <option value='2'>Blusas</option>
          <option value='3'>Jaquetas</option>
          <option value='4'>Vestidos</option>
        </select>

        <select
          className='form-select min-w-[190px] py-3 border-black border-[1px] text-[24px] text-center mb-4'
          onChange={handleStyleChange}
        >
          <option value=''>Estilo</option>
          <option value='casual'>Casual</option>
          <option value='street'>Street</option>
          <option value='sensual'>Sensual</option>
          <option value='social'>Social</option>
        </select>

        <select
          className='form-select min-w-[190px] py-3 border-black border-[1px] text-[24px] text-center mb-4'
          onChange={handleFittingChange}
        >
          <option value=''>Caimento</option>
          <option value='oversize'>Oversize</option>
          <option value='skinny'>Skinny</option>
          <option value='loose'>Solto</option>
          <option value='slimfit'>Slim Fit</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
