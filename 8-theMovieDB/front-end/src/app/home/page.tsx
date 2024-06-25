"use client"
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

const movieUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
const apiKey = 'api_key=04c35731a5ee918f014970082a0088b1&page=1';
const userId = 3

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [favoriteMovieIds, setFavoriteMovieIds] = useState<number[]>([]);

    async function getMovies() {
        try {
            const res = await axios.get(`${movieUrl}${apiKey}`);
            const results: Movie[] = res.data.results;
            setMovies(results);
            console.log(results)
        } 
        catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    const handleFavoriteToggle = async (id: number) => {
        if (favoriteMovieIds.includes(id)) {
            try {
                await axios.delete(`http://localhost:3030/deleteMovie`, { data: { userId, movieId: id } });
                setFavoriteMovieIds(prevIds => prevIds.filter(favId => favId !== id));
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
            } catch (error) {
                console.error('Error adding favorite movie:', error);
            }
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <Header />
            <main className="movies-grid">
            {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        banner={movie.poster_path}
                        title={movie.title}
                        id={movie.id}
                        onFavoriteToggle={handleFavoriteToggle}
                        isFavorited={favoriteMovieIds.includes(movie.id)}
                    />
                ))}
            </main>
        </>
    );
}