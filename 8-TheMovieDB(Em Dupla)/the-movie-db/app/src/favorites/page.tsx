/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import FavoritesHeader from './FavoritesHeader';
import Footer from '@/components/footer';

interface Movie {
  title: string;
  description: string;
  releaseDate: string;
  posterPath: string;
  vote: number;
  id:number;
}

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favoriteIds.length === 0) return;

        const TMDB_API_KEY = '04c35731a5ee918f014970082a0088b1'; 
        const requests = favoriteIds.map((id: number) =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
        );

        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map(response => response.json()));

        const favoriteMovies = data.map((movie: any) => ({
          title: movie.title,
          description: movie.overview,
          releaseDate: movie.release_date,
          posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
          vote: movie.vote_average,
          id: movie.id
        }));

        setFavorites(favoriteMovies);
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
        setError('Failed to fetch favorite movies');
      }
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <><FavoritesHeader /><div className="container w-[90%] mx-auto px-4 my-4">
          {error && <p className="text-red-500">{error}</p>}
          <h2 className="text-2xl font-bold mb-4 text-white">Favorite Movies</h2>
          {favorites.length === 0 && <h3 className="text-gray-600 font-bold text-4xl">No favorite movies added yet.</h3>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {favorites.map((movie, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 space-y-1">
                      <img src={movie.posterPath} alt={movie.title} className="w-full h-auto mb-2 rounded-xl" />
                      <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                      <p className="text-gray-500 text-sm">Release Date: {movie.releaseDate}</p>
                      <p className="text-yellow-600 text-sm">Rating: {(movie.vote).toFixed(1)}</p>
                  </div>
              ))}
          </div>
      </div>
      <Footer/></>
  );
};
export default Favorites
