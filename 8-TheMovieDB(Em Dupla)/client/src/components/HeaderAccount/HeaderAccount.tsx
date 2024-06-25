"use client";
import { useEffect, useState } from 'react';
import '../HeaderHome/HeaderHome.css'
import './HeaderAccount.css'
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
      <header className='header-account'>
        <nav>
        <ul>
            <li><a href="/" className='logo'>MovieDB</a></li>
            <li><a href="/Account" className='account'> <FaRegUser className='icon'/> <p className="text"> {user? 'Minha Conta' : 'Entre ou Cadastre-se'}</p> </a></li>
        </ul>
        </nav>
        
      </header>
    );
  }
  