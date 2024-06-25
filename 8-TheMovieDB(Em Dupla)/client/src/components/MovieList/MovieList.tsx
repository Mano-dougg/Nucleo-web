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
  const [filter, setFilter] = useState('popular')
  const { setSelectedMovie } = useSelectedMovie();


  //carrega os filmes por página 
  const fetchMovies = async (page: number, filter: string) => {

      const moviesData = await getMoviesByPopularity(page, filter);

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
    fetchMovies(page, filter);
  }, [page, filter]);

  //passa para a próxima página
  const  fetchMoreData = () => {
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
    <>
    <form className='movie-list-form'>
      <input className="movie-list-form_input" type="radio" id="playing" name="filter" value="playing" 
      onClick={()=>{
        setFilter(filter==='now_playing'?
          ''
          :'now_playing'
        );
      }} />
      <label className="movie-list-form__label" htmlFor="playing">Em Cartaz</label>
      <br className='break'/>
      <input className="movie-list-form_input" type="radio" id="popular" name="filter" value="popular" 
      onClick={()=>{
        setFilter(filter==='popular'?
          ''
          :'popular'
        );
      }}
      defaultChecked />
      <label className="movie-list-form__label" htmlFor="popular">Popular</label>
      <br className='break'/>

      <input className="movie-list-form_input" type="radio" id="rated" name="filter" value="rated" 
      onClick={()=>{
        setFilter(filter==='top_rated'?
          ''
          :'top_rated'
        );
      }} />
      <label className="movie-list-form__label" htmlFor="rated">Melhor Avaliados</label>
      <br className='break'/>

      <input className="movie-list-form_input" type="radio" id="upcoming" name="filter" value="upcoming" 
      onClick={()=>{
        setFilter(filter==='upcoming'?
          ''
          :'upcoming'
        );
      }} />
      <label className="movie-list-form__label" htmlFor="upcoming">Em Breve</label>
    <br className='break'/>
    </form>

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
    </>
  );

};

export default MovieList;
