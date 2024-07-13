import React, { useState } from 'react';

type Props = {
  SearchProduct?: (searchTerm: string) => void; 
};

function SearchBar({ SearchProduct }: Props) {
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
    <div className="w-[69%] sm:hidden flex h-[32px] rounded-[60px] border-[1px] bg-[white] border-black items-center px-4 py-1 mt-4">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full text-[16px] font-medium bg-transparent focus:outline-none"
        value={searchTerm}
        onChange={handleSearchChange} 
      />
      <button onClick={handleSearchClick} className="ml-2"> 
        <img src="/search.svg" alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
