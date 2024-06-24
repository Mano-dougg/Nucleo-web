"use client";
import { useState } from 'react';

import './page.css';
import HeaderAccount from '@/components/HeaderAccount/HeaderAccount';
import FavMovieList from '@/components/FavMovieList/FavMovieList';
import WatchMovieList from '@/components/WatchMovieList/WatchMovieList';

export default function Account() {

  const [ session, setSession ] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('Nome do usuário');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async () => {

  };

  const handleLogin = async () => {
  };

  if (session) {

    return (
      <main>
        <HeaderAccount/>
        <div className='user-account'>
          <h1>Bem vindo, {name}!</h1>

          <h2>Explore seus filmes favoritos </h2>
          <FavMovieList/>
          <h2> Sua Watchlist </h2>
          <WatchMovieList/>
          <div className='separator'></div>
        </div>
      </main>
    );

  }

  return (
    <main>
    <HeaderAccount/>
    <div className='user'>
      <h1>{isRegistering ? 'Cadastre-se' : 'Faça Login'}</h1>
      {isRegistering && (
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isRegistering ? (
        <button onClick={handleRegister}>Cadastrar</button>
      ) : (
        <button onClick={handleLogin}>Entrar</button>
      )}
      <button onClick={() => setIsRegistering(!isRegistering)} className='change'>
        {isRegistering ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Cadastre-se'}
      </button>
    </div>
    </main>
  );
}
