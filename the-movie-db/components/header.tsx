'use client'

import React, { useState } from 'react';
import Link from 'next/link'; 
import Icon from './HeaderIcons/StoreIcon';
import SearchIcon from './HeaderIcons/SearchIcon';
import UserIcon from './HeaderIcons/UserIcon';
import Sidebar from './SideBar'; 

interface HeaderProps {
  addUser: (password: string, email: string, nome: string) => Promise<void>;
  onSearch: (searchTerm: string) => void; 
}

export function Header({ addUser, onSearch }: HeaderProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="flex justify-between px-10 items-center bg-gray-900 text-white py-4 shadow-lg">
      <div className='md:hidden'>
        <UserIcon/>
      </div>
      <h1
        className="text-2xl font-dunerise font-bold leading-11 tracking-wide cursor-pointer"
        onClick={toggleSidebar} 
      >
        O M N I
      </h1>
      <nav className="hidden md:flex font-bold justify-between space-x-16 items-center">
        <Link href="/home">
          Home
        </Link>
        <Link href="/store">
          Store
        </Link>
        <Link href="/library">
          Library
        </Link>
      </nav>
      <div className='flex items-center gap-4'>
        <Icon/>
        <div className="w-[290px] h-[38px] px-[18px] py-[10px] space-x-4 rounded-[15px] bg-[#354244] items-center gap-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search for a movie, game, tv show or anime"
            className="w-full text-[10px] font-medium leading-[17.5px] bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon/>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} addUser={addUser}/>
    </header>
  );
}
