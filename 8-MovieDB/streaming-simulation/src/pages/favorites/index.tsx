import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const FavoritesPage = () => {
    const { data: session } = useSession();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!session) return;

            try {
                const response = await axios.post('/api/favorites', { userId: session.user.id });
                const uniqueFavorites = removeDuplicateMovies(response.data); // Remover filmes duplicados
                setFavorites(uniqueFavorites);
            } catch (error) {
                console.error('Erro ao carregar favoritos:', error);
            }
        };

        fetchFavorites();
    }, [session]);

    const removeFavorite = async (movieId) => {
        try {
            await axios.post('/api/delete_favorite', { userId: session.user.id, movieId });
            setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.movie.id !== movieId));
        } catch (error) {
            console.error('Erro ao remover dos favoritos:', error);
        }
    };

    const removeDuplicateMovies = (favorites) => {
        const uniqueFavorites = [];
        const seenIds = new Set();

        favorites.forEach(favorite => {
            if (!seenIds.has(favorite.movie.id)) {
                seenIds.add(favorite.movie.id);
                uniqueFavorites.push(favorite);
            }
        });

        return uniqueFavorites;
    };

    if (!session) {
        return <p>Você precisa estar logado para ver seus favoritos.</p>;
    }

    return (
        <div>
            <h1>Meus Favoritos</h1>
            {favorites.length === 0 ? (
                <p>Você ainda não tem favoritos.</p>
            ) : (
                <div className="movie-grid">
                    {favorites.map(favorite => (
                        <div key={favorite.movie.id} className="movie-item">
                            <h2>{favorite.movie.title}</h2>
                            {favorite.movie.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${favorite.movie.poster_path}`}
                                    alt={`Poster de ${favorite.movie.title}`}
                                />
                            ) : (
                                <p>Poster não disponível</p>
                            )}
                            <button onClick={() => removeFavorite(favorite.movie.id)}>Remover dos Favoritos</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
