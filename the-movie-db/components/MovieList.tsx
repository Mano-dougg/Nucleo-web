/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import FavoriteIcon from './MovieIcons/FavoriteIcon';

interface Movie {
  title: string;
  description: string;
  releaseDate: string;
  posterPath: string;
  vote: number;
  id:number;
}

interface MovieListProps {
  searchTerm: string;
}

export const MovieList: React.FC<MovieListProps> = ({ searchTerm }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const TMDB_API_KEY = '04c35731a5ee918f014970082a0088b1'; 
        const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

        const response = await fetch(TMDB_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data from TMDB');
        }

        const data = await response.json();
        console.log(data);

        const moviesData = data.results.map((movie: any) => ({
          title: movie.title,
          description: movie.overview,
          releaseDate: movie.release_date,
          posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
          vote: movie.vote_average,
          id: movie.id
        }));

        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies');
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container w-[90%] mx-auto px-4 my-4">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 space-y-3">
            <div>
            <img src={movie.posterPath} alt={movie.title} className="w-full h-auto mb-2 rounded-xl" />
            <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-500 text-sm">Release Date: {movie.releaseDate}</p>
            <p className="text-yellow-600 text-sm">Rating: {(movie.vote).toFixed(1)}</p></div>
            <FavoriteIcon/>
          </div>
        ))}
      </div>
    </div>
  );
};
