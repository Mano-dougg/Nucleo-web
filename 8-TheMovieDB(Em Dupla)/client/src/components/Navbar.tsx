// components/Navbar.tsx

import { useState } from 'react';
import Link from 'next/link';
import Person from '../../public/svg/icons/person';
import Heart from '../../public/svg/icons/heart';
import Search from '../../public/svg/icons/search';

interface NavbarProps {
  onSearch?: (query: string) => void; // Tornando onSearch opcional com o '?'
  onToggleFavorites?: () => void; // Função para lidar com o clique no botão de favoritos
  onHideFavorites?: () => void; // Função para ocultar os favoritos
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onToggleFavorites, onHideFavorites }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleToggleFavorites = () => {
    if (onToggleFavorites) {
      onToggleFavorites();
    }
  };

  const handleHideFavorites = () => {
    if (onHideFavorites) {
      onHideFavorites();
    }
  };

  return (
    <nav className="w-full z-40">
      <div className="px-12 py-5 flex flex-row items-center justify-between transition duration-500 bg-opacity-90">
        <div className="flex flex-row items-center">
          <button>
            <span className="ml-10 text-xl font-semibold">Logo</span>
          </button>
          <ul className="flex flex-row gap-12 ml-[100px] text-base tracking-wide">
            <li>
              <Link href="" onClick={handleHideFavorites}>Home</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/library">Library</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <button
            onClick={handleToggleFavorites} // Chama a função handleToggleFavorites ao clicar no botão
            className="flex w-12 h-9 bg-[#26292A] bg-opacity-30 backdrop-blur-xl drop-shadow-button border-white border-opacity-5 border-[1px] rounded-full items-center justify-center"
          >
            <Heart />
          </button>
          <div className="flex flex-row items-center h-[42px] px-5 pr-4 bg-[#26292A] bg-opacity-30 backdrop-blur-xl drop-shadow-button border-white border-opacity-5 border-[1px] rounded-full">
            <input
              type="search"
              placeholder="Search for a movie, or tv show..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-[230px] focus:outline-none focus:ring-0 bg-transparent"
            />
            <button onClick={handleSearch}>
              <Search />
            </button>
          </div>
          <button>
            <Person />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
