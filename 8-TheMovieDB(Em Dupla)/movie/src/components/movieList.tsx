import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  margin-top: 20px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 20px;
`;

const MovieCard = styled.div`
  position: relative;
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff; 
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${MovieCard}:hover & {
    opacity: 1;
  }
`;

const OverlayText = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const OverlayLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
`;

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
      <h2>Filmes Populares</h2>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Overlay>
              
              <OverlayLink href="#">Adicionar aos favoritos</OverlayLink>
              <OverlayLink href="#">Mais Informações</OverlayLink>
            </Overlay>
          </MovieCard>
        ))}
      </MovieGrid>
    </MovieListContainer>
  );
};

export default MovieList;
