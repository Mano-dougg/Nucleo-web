import React, { useState } from 'react';
import Modal from '../Modal';

type Props = {
  SearchProduct?: (searchTerm: string) => void; 
};

const ButtonsAndSearch= ({ SearchProduct }:Props) => {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); 
  };

  const handleSearchClick = () => {
    if (SearchProduct) {
      SearchProduct(searchTerm); 
    }
  };

  return (
    <div className='justify-between flex items-center px-10'>
      <div className="w-[60%] hidden sm:flex h-[46px] rounded-[60px] border-[1px] bg-white border-black items-center px-4 py-1 mt-4">
        <input
          type="text"
          placeholder="Pesquisar por um produto específico..."
          className="w-full text-[16px] font-medium bg-transparent focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange} 
        />
        <button onClick={handleSearchClick} className="ml-2"> 
          <img src="/search.svg" alt="Search" />
        </button>
      </div>

      <div className='sm:gap-9 gap-3 flex mt-3'>
        <Modal />
      </div>
    </div>
  );
}

export default ButtonsAndSearch;
