"use client";
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './HeaderHome.css'
import { FaRegUser } from "react-icons/fa";
import { User } from '@/types/types';

export default function HeaderHome () {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
    return (
      <header className='header-home'>
        <nav>
        <ul>
            <li><a href="/" className='logo'>MovieDB</a></li>
            <li><a href="/Account"> <FaRegUser className='icon'/> <p className="text">{user? 'Minha Conta' : 'Entrar'}</p> </a></li>
        </ul>
        </nav>

        <SearchBar/>
        
      </header>
    );
  }
  