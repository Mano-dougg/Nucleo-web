
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  director: string;
  price: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `https://api.themoviedb.org/3/movie/popular`;
      if (searchQuery) {
        url = `https://api.themoviedb.org/3/search/movie`;
      }
      const response = await axios.get(url, {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: 'pt-BR',
          query: searchQuery, // Adicionar o parâmetro de consulta se houver
        },
      });
      const fetchedMovies = response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        director: 'Desconhecido',
        price: 0.0,
      }));
      setMovies(fetchedMovies);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      setError(error.response?.data?.message || 'Failed to fetch movies.');
    } else if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('An unknown error occurred.');
    }
    console.error('Failed to fetch movies:', error);
  };

  const toggleFavorites = async () => {
    setLoading(true);
    setError(null);
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User ID not found in localStorage.');
      }

      const response = await axios.get(`http://localhost:3000/users/${userId}/favorites`);
      const favoriteTitles = response.data.map((favorite: { movieTitle: string }) => favorite.movieTitle);

      const favoriteMoviesPromises = favoriteTitles.map(async (title: string) => {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: process.env.TMDB_API_KEY,
              language: 'pt-BR',
              query: title,
            },
          }
        );
        const movieData = movieResponse.data.results[0];
        return {
          id: movieData.id,
          title: movieData.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
          director: 'Desconhecido',
          price: 0.0,
        };
      });

      const fetchedFavorites = await Promise.all(favoriteMoviesPromises);
      setFavorites(fetchedFavorites);
      setShowFavorites(true);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFavorite = async (movie: Movie) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User ID not found in localStorage.');
      }

      await axios.post(`http://localhost:3000/users/${userId}/favorites`, { movieTitle: movie.title });
      setFavorites([...favorites, movie]);
    } catch (error) {
      console.error('Failed to add favorite:', error);
    }
  };

  const handleRemoveFavorite = async (movie: Movie) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User ID not found in localStorage.');
      }

      await axios.delete(`http://localhost:3000/users/${userId}/favorites`, { data: { movieTitle: movie.title } });
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Failed to remove favorite:', error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query); // Atualizar o estado de consulta com a nova consulta
  };

  const handleHideFavorites = () => {
    setShowFavorites(false); // Atualizar o estado para ocultar os favoritos
  };

  return (
    <div className="w-screen h-screen relative items-start justify-start flex flex-col">
      <Navbar onToggleFavorites={toggleFavorites} onSearch={handleSearch} onHideFavorites={handleHideFavorites} />
      <Banner />
      <div className="flex flex-col gap-4 pl-12 -mb-[700px]">
        <h2 className="mt-5 text-lg font-semibold px-2">
          {showFavorites ? 'Favoritos' : 'Novos episódios'}
        </h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <section className="flex flex-row gap-3">
          {showFavorites
            ? favorites.map((movie) => (
                <MovieCard
                  key={movie.id}
                  image={movie.poster_path}
                  title={movie.title}
                  price={movie.price}
                  director={movie.director}
                  isFavorite={true}
                  onToggleFavorite={() => handleRemoveFavorite(movie)}
                />
              ))
            : movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  image={movie.poster_path}
                  title={movie.title}
                  price={movie.price}
                  director={movie.director}
                  isFavorite={favorites.some((fav) => fav.id === movie.id)}
                  onToggleFavorite={() => handleAddFavorite(movie)}
                />
              ))}
        </section>
      </div>
    </div>
  );
}