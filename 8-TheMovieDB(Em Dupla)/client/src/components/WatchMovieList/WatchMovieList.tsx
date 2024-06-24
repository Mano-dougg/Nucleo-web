'use client';

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import '../FavMovieList/FavMovieList.css';

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdropPath: string;
  vote_average: number;
}

const WatchMovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ'
          }
        });

        const moviesData = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          backdropPath: movie.backdrop_path,
          vote_average: movie.vote_average,
        }));

        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error(error);
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