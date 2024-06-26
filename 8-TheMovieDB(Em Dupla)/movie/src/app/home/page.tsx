// app/home.tsx

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components2/header';
import MovieList from '@/components/movieList';

interface User {
  name: string;
  email: string;
  
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar dados do usuário usando o token JWT do localStorage
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token JWT não encontrado.');
        }

        const response = await axios.get<User>('http://localhost:1080/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data); // Armazena os dados do usuário no estado
        setLoading(false); // Indica que a página carregou os dados do usuário
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setLoading(false);
      }
    };

    fetchUser(); 
  }, []);

  if (loading) {
    return <p>Carregando...</p>; 
  }

  return (
    <>
      <Header user={user} />
      <div>
        <h1>Pagina Inicial!</h1>
        <MovieList/>
      </div>
    </>
  );
};

export default Home;
