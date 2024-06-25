'use client';

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import '../FavMovieList/FavMovieList.css';
import { Movie } from '@/types/types';

const WatchMovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const favMovies = [1022789, 653346, 573435, 639720, 1001311, 929590, 829402];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieRequests = favMovies.map((movieId) =>
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ',
            }
          })
        );

        const movieResponses = await Promise.all(movieRequests);

        const moviesData = movieResponses.map(response => ({
          id: response.data.id,
          title: response.data.title,
          overview: response.data.overview,
          backdropPath: response.data.backdrop_path,
          vote_average: response.data.vote_average,
        }));

        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {movies.map((movie) => (
            <div key={movie.id} className="embla__slide">
              <div className='card-carousel'>
                <div className='card-poster-carousel'>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                    alt={movie.title}
                    width={1000}
                    height={300}
                    className='card-poster-img-carousel'
                  />
                </div>
                <div className='card-details-carousel'>
                  <h4>{movie.title}</h4>
                  <div className='hidden-info-carousel'>
                    <button className='remove'>
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchMovieList;