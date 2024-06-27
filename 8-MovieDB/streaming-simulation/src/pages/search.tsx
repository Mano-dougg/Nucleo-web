import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link'; // Importe o Link do next/link

interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

const SearchResults = () => {
    const router = useRouter();
    const { query } = router.query;
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!query) {
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
                );
                setMovies(response.data.results);
                setError(null);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError('Erro ao buscar filmes. Por favor, tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (movies.length === 0) {
        return <p>Nenhum resultado encontrado para "{query}"</p>;
    }

    return (
        <div>
            <h1>Resultados para: {query}</h1>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-item">
                        <h2>{movie.title}</h2>
                        {/* Utilize o componente Link do Next.js para criar o link para os detalhes */}
                        <Link  legacyBehavior href={`/movie/${movie.id}`}>
                            <a>
                                {movie.poster_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={`Poster de ${movie.title}`}
                                    />
                                ) : (
                                    <p>Poster não disponível</p>
                                )}
                            </a>
                        </Link>
                        <p>{movie.overview}</p>
                        <p>Data de Lançamento: {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
