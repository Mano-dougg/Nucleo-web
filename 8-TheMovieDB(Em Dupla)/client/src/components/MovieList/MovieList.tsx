"use client";

import React, { useEffect, useState } from 'react';
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'; 
import './MovieList.css'; 
import { Movie } from '@/types/types';
import { scrollToTop } from '@/utils/functions';
import { getMoviesByPopularity } from '@/server/tmdb/GETMovie.services';

const MovieList: React.FC = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { setSelectedMovie } = useSelectedMovie();


  //carrega os filmes por página 
  const fetchMovies = async (page: number) => {

      const moviesData = await getMoviesByPopularity(page);

      if (moviesData.length === 0) {
        setHasMore(false);
      } else {

        if (page>1){
          setMovies((prevMovies) => [...prevMovies, ...moviesData]);
        } else if (page===1) {
          setMovies(moviesData);
        }
      }

      setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  //passa para a próxima página
  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  //seleciona o filme 
  const handleCardClick = (movie: Movie) => {
    setSelectedMovie(movie);
    scrollToTop();
  };

  if (loading && page === 1) {
    return <p>Carregando...</p>;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Carregando...</h4>}
      endMessage={<p>Sem filmes para carregar</p>}
    >
      <div className='container'>
        {movies.map((movie) => (

          <div key={movie.id} className='card' onClick={() => handleCardClick(movie)}>

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

              <div className='hidden-info'>

                <div className='rating'>
                  <FaStar color="gold" className='fa-star'/> {movie.vote_average.toFixed(1)}
                </div>

                {/* <button className='fav'>
                  <FaRegHeart/>
                </button> */}

              </div>

            </div>

          </div>
        ))}
      </div>
      
    </InfiniteScroll>
  );

};

export default MovieList;
