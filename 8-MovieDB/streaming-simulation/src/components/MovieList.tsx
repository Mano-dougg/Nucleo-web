import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link do next/link

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const apiKey = "a2006311928939b35613c28405038c87";
    const popular = "https://api.themoviedb.org/3/movie/popular";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${popular}?api_key=${apiKey}`);
            const result = response.data.results;
            setMovies(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            {movies.map((movie) => (
                <div className="movieContainer" key={movie.id}>
                    <h1>{movie.title}</h1>
                    {/* Utilize o componente Link do Next.js para criar o link para os detalhes */}
                    <Link legacyBehavior href={`/movie/${movie.id}`}>
                        <a>
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={`${movie.title} Poster`}
                                />
                            )}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
