import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  margin-top: 20px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
`;

const MovieCard = styled.div`
  background-color: ;
  border-radius: 8px;
  padding: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff; 
`;

const MovieOverview = styled.p`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 10px;
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Tagh2 =styled.h2`
color:white;
`

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'ad1c12884f4a7421c3d9e6d859be97a9';
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieListContainer>
      <Tagh2>Filmes Populares</Tagh2>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
           
          </MovieCard>
        ))}
      </MovieGrid>
    </MovieListContainer>
  );
};

export default MovieList;
