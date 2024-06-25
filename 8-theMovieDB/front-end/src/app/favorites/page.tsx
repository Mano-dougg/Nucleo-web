"use client";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const movieUrl = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'api_key=04c35731a5ee918f014970082a0088b1';
const userId = 3;

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

export default function Home() {
    const [favoriteMovieIds, setFavoriteMovieIds] = useState<number[]>([]);
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    const fetchFavoriteMovieIds = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3030/getMovie/${userId}`);
            const ids = response.data.favoriteMovies.map((movie: any) => movie.id);
            setFavoriteMovieIds(ids);
        } catch (error) {
            console.error('Error fetching favorite movie IDs:', error);
        }
    }, []);

    const getPopularMovies = useCallback(async () => {
        try {
            const response = await axios.get(`${movieUrl}?${apiKey}&sort_by=popularity.desc`);
            const results: Movie[] = response.data.results;
            
            // Filtrar os filmes populares pelo ID dos filmes favoritos
            const filteredMovies = results.filter(movie => favoriteMovieIds.includes(movie.id));
            
            setFavoriteMovies(filteredMovies);
        } catch (error) {
            console.error('Error fetching popular movies:', error);
        }
    }, [favoriteMovieIds]);

    const handleFavoriteToggle = async (id: number) => {
        if (favoriteMovieIds.includes(id)) {
            try {
                await axios.delete(`http://localhost:3030/deleteMovie/${id}`, { data: { userId, movieId: id } });
                setFavoriteMovieIds(prevIds => prevIds.filter(favId => favId !== id));
                console.log('removido')
            } catch (error) {
                console.error('Error removing favorite movie:', error);
            }
        } else {
            try {
                await axios({
                    method: "post",
                    url: `http://localhost:3030/addMovie/${userId}`,
                    data: {
                      id: id
                    },
                });
                setFavoriteMovieIds(prevIds => [...prevIds, id]);
                console.log('postado')
            } catch (error) {
                console.error('Error adding favorite movie:', error);
            }
        }
    };

    useEffect(() => {
        fetchFavoriteMovieIds();
    }, [fetchFavoriteMovieIds]);

    useEffect(() => {
        if (favoriteMovieIds.length > 0) {
            getPopularMovies();
        }
    }, [favoriteMovieIds, getPopularMovies]);

    return (
        <>
            <Header />
            <h2>Filmes Favoritos:</h2>
            <main className="movies-grid">
                {favoriteMovies.length === 0 && <p> Nenhum filme favoritado. </p>}
                {favoriteMovies.length > 0 && favoriteMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        banner={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        title={movie.title}
                        id={movie.id}
                        onFavoriteToggle={handleFavoriteToggle}
                        isFavorited={true}
                    />
                ))}
            </main>
        </>
    );
}