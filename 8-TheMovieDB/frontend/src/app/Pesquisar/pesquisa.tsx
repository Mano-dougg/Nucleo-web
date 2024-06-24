'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';

interface Filme {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

export default function Pesquisar() {
  const [aberto, setAberto] = useState(false);
  const [Textual, setTextual] = useState('');
  const [resultado, setResultado] = useState<Filme | null>(null);

  const Parabrir = () => {
    setAberto(!aberto);
  };

  const Pesquisa = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextual(e.target.value);
  };

  const Mandar = () => {
    if (Textual.trim()) {

      axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: '04c35731a5ee918f014970082a0088b1',
          query: Textual
        }
      })
        .then((response) => {
          if (response.data.results && response.data.results.length > 0) {
            const firstResult = response.data.results[0];
            setResultado({
              id: firstResult.id,
              titulo: firstResult.title,
              descricao: firstResult.overview,
              imagem: `https://image.tmdb.org/t/p/w500${firstResult.poster_path}`
            });
          } else {
            setResultado(null); 
          }
        })
        .catch((error) => {
          setResultado(null);
        });
    }
  };

  const limpar = () => {
    setResultado(null);
    setTextual('');
  };

  return (
    <header className='header-container'>
      <section className='direito'>
        <div className='pesquisar'>
          <button onClick={() => {
            Parabrir();
            Mandar(); 
          }}>
            <Image src='/search.png' alt='Pesquisar' width={20} height={20} />
          </button>
          {aberto && (
            <div className='search-bar'>
              <input type='text' placeholder='busca' value={Textual} onChange={Pesquisa} onKeyDown={(e) => {
                  if (e.key === 'Enter') Mandar();
                }}
              />
              <button onClick={Mandar}>Buscar</button>
            </div>
          )}
        </div>

        {resultado && (
          <div className='resultado-pesquisa'>
            <div className='filme'>
              <img src={resultado.imagem}/>
              <h1>{resultado.titulo}</h1>
              <button onClick={limpar}>Limpar Pesquisa</button>
            </div>
          </div>
        )}
      </section>
    </header>
  );
}