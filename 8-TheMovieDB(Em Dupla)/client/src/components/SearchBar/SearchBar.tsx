'use client';

import './SearchBar.css'
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search for a movie, tv show or anime"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
