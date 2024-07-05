
import React from 'react';

function SearchBar() {
  return (
    <div className="w-[187px] sm:hidden flex h-[32px] rounded-[60px] border-[1px] bg-[white] border-black items-center px-4 py-1 mt-4">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full text-[16px] font-medium bg-transparent focus:outline-none"
      />
      <img src="search.svg" alt="Search" />
    </div>
  );
}

export default SearchBar;