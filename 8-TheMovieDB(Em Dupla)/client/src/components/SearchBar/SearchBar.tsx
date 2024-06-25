'use client';

import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import { getMovieByName } from '@/server/tmdb/GETMovie.services';
import { scrollToTop } from '@/utils/functions';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const { setSelectedMovie } = useSelectedMovie();

  // realiza a pesquisa e habilita os resultados
  const handleSearch = async () => {

    if (query.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    const results = await getMovieByName(query)
    setResults(results);
    setShowResults(true);

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500); 

    return () => clearTimeout(timer);
  }, [query]);

  //seleciona o filme 
  const handleResultClick = (movie: Movie) => {
    setSelectedMovie({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      backdropPath: movie.backdrop_path || '', 
      vote_average: movie.vote_average,
    });
    setShowResults(false);
    scrollToTop();
    setQuery("");
  };

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search for a movie, tv show or anime"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      {showResults && results.length > 0 && (
        <div className='search-results'>
          {results.map((movie) => (
            <div key={movie.id} className='search-result-item' onClick={() => handleResultClick(movie)}>
              <Image src={`https://image.tmdb.org/t/p/w92${movie.poster_path || ''}`} alt={movie.title} width={92} height={138} />
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
