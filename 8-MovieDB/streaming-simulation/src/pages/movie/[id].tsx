import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    runtime: number;
    genres: { id: number; name: string }[];
}

const MovieDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: session } = useSession();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            if (!id) return;

            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=videos`
                );
                setMovie(response.data);
                setError(null);

                // Verificar se o filme já está nos favoritos, apenas se houver uma sessão ativa
                if (session) {
                    const favResponse = await axios.post('/api/get_favorites', { userId: session.user.id });
                    const favoriteMovies = favResponse.data.favorite.map((fav: any) => fav.id);
                    setIsFavorite(favoriteMovies.includes(parseInt(id as string, 10)));
                }
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setError('Erro ao buscar detalhes do filme. Por favor, tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id, session]);

    const handleFavorite = async () => {
        if (!session || !movie) return;

        try {
            const movieData = {
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                poster_path: movie.poster_path,
            };

            if (isFavorite) {
                await axios.post('/api/delete_favorite', { userId: session.user.id, movieId: movie.id });
            } else {
                await axios.post('/api/new_favorite', { userId: session.user.id, movieId: movie.id, movieData });
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Erro ao atualizar favoritos:', error);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!movie) {
        return <div>Filme não encontrado.</div>;
    }

    return (
        <>
        <h1 className='id-title'>{movie.title}</h1>
        <div className='idcontent'>
            
            <div className="id-division">
                {movie.poster_path ? (
                    <img
                        className='id-image'
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={`Poster de ${movie.title}`}
                    />
                ) : (
                    <p>Poster não disponível</p>
                )}

                <div className="id-inf">
                    <p className='id-date'>Data de Lançamento: {movie.release_date}</p>
                    <p className='id-cla'>Classificação Indicativa: {movie.genres.map(genre => genre.name).join(', ')}</p>
                    <p className='id-ava'>Avaliação Média: {movie.vote_average}</p>
                    <p className='id-time'>Tempo de Duração: {movie.runtime} minutos</p>
                </div>
                {session && (
                    <button className='id-btn' onClick={handleFavorite}>
                        {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                    </button>
                )}
            </div>

            <div className="division">
                <p className='id-over'>{movie.overview}</p>

            

                {movie.videos?.results.length > 0 && (
                    <div>
                        <h2>Trailer</h2>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                            title="Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default MovieDetailPage;
