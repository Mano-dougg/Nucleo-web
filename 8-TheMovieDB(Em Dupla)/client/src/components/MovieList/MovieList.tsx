"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // Importando um ícone de estrela do Font Awesome
import './MovieList.css'; // Supondo que você tenha um módulo CSS

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdropPath: string;
  vote_average: number;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className='container'>
      {movies.map((movie) => (
        <div key={movie.id} className='card'>

        <div className='card-poster'>
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                alt={movie.title}
                width={1000}
                height={280}
                className='card-poster-img'
            />
        </div>

            <div className='card-details'>
                <h2>{movie.title}</h2>
                {/* <p>{movie.overview}</p> */}

                <div className='rating'>
                    <FaStar color="gold" className='fa-star'/> {movie.vote_average.toFixed(1)}
                </div>
            </div>

        </div>
      ))}
    </div>
  );
};

export default MovieList;
