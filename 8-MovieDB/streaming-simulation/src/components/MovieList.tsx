"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link do Next.js
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Arrow from '../assets/arrow.png'
import Image from 'next/image';
import HomePage from '@/pages';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
}

const MovieList = () => {
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [actionMovies, setActionMovies] = useState<Movie[]>([]);
    const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
    const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
    const [selectedPosterId, setSelectedPosterId] = useState<number | null>(null); // State para controlar o poster selecionado
    const [selectedBackdrop, setSelectedBackdrop] = useState<string | null>(null); // State para controlar o backdrop selecionado

    const apiKey = "a2006311928939b35613c28405038c87";
    const genreUrl = "https://api.themoviedb.org/3/discover/movie";
    const popularUrl = "https://api.themoviedb.org/3/movie/popular";

    const fetchMoviesByGenre = async (genreId: number, setState: React.Dispatch<React.SetStateAction<Movie[]>>) => {
        try {
            const response = await axios.get(`${genreUrl}?api_key=${apiKey}&with_genres=${genreId}`);
            const result = response.data.results;
            setState(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchPopularMovies = async () => {
        try {
            const response = await axios.get(`${popularUrl}?api_key=${apiKey}`);
            const result = response.data.results.slice(0, 3); // Get the first 3 popular movies
            setPopularMovies(result);
            if (result.length > 0) {
                setSelectedMovie(result[0]); // Select the first movie by default
                setSelectedPosterId(result[0].id); // Seleciona o primeiro poster por padrão
                setSelectedBackdrop(result[0].backdrop_path); // Define o backdrop inicial
            }
        } catch (error) {
            console.error('Error fetching popular movies:', error);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
        fetchMoviesByGenre(28, setActionMovies); // 28 é o ID do gênero para Ação
        fetchMoviesByGenre(35, setComedyMovies); // 35 é o ID do gênero para Comédia
        fetchMoviesByGenre(27, setHorrorMovies); // 27 é o ID do gênero para Terror
    }, []);

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setSelectedPosterId(movie.id); // Define o ID do poster selecionado
        setSelectedBackdrop(movie.backdrop_path); // Define o backdrop do filme clicado
    };

    const renderPopularMovies = () => (
        <div className="popularMovies" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedBackdrop})` }}>
            <div className="popularMoviesDetails">
                {selectedMovie && (
                    <>
                        <h3 className='dtl-h1'>{selectedMovie.title}</h3>
                        <p className='dtl-cl' >Ranking pelos usuários: {selectedMovie.vote_average}</p>
                        <p className='dtl-res'>{selectedMovie.overview}</p>
                        <div className="dtl-link">
                            <Link legacyBehavior href={`/movie/${selectedMovie.id}`}>
                                <a className="dtl-dtl">
                                    <Image
                                        className='dtl-dtl-img'
                                        src={Arrow}
                                        alt='arrow'
                                    />
                                    Detalhes
                                </a>
                            </Link>
                        </div>
                    </>
                )}
                 
            </div>
            <div className="popularMoviesPosters">
                {popularMovies.map((movie) => (
                    <div className={`posterContainer ${selectedPosterId === movie.id ? 'selected' : ''}`} key={movie.id} onClick={() => handleMovieClick(movie)}>
                        <img
                            className='posterimg'
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                            style={{ transform: selectedPosterId === movie.id ? 'scale(1)' : 'scale(0.8)' }} // Aplica a transformação de escala condicionalmente
                        />
                    </div>
                ))}
            </div>
            
        </div>
        
    );

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const renderCarousel = (movies: Movie[], genre: string) => (
        <div className='carroussel'>
            <h2 className='car-gen'>{genre}</h2>
            <Carousel responsive={responsive}>
                {movies.map((movie) => (
                    <div className="movieContainer" key={movie.id}>
                        <h3 className='moviecontainertitle'>{movie.title}</h3>
                        <Link className='car-posterimg' legacyBehavior href={`/movie/${movie.id}`}>
                            <a>
                                {movie.poster_path && (
                                    <img
                                        className='imgimg'
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={`${movie.title} Poster`}
                                    />
                                )}
                            </a>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );

    return (
        <div>
            {renderPopularMovies()}
           
            {renderCarousel(actionMovies, 'Ação')}
            {renderCarousel(comedyMovies, 'Comédia')}
            {renderCarousel(horrorMovies, 'Terror')}
        </div>
    );
};

export default MovieList;
