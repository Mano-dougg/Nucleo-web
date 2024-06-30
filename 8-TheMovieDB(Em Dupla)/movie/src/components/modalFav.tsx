import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MovieItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6666;
  }
`;

interface Movie {
  id: number;
  title: string;
}

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.error('Token JWT não encontrado.');
        return;
      }

      const response = await axios.get<Movie[]>('http://localhost:1080/favoritos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavoriteMovies(response.data); 
    } catch (error) {
      console.error('Erro ao buscar filmes favoritos:', error);
    }
  };

  return (
    <ModalContainer>
      <ModalTitle>Meus Favoritos</ModalTitle>
      {favoriteMovies.length > 0 ? (
        <MovieList>
          {favoriteMovies.map(movie => (
            <MovieItem key={movie.id}>
              {movie.title}
            </MovieItem>
          ))}
        </MovieList>
      ) : (
        <p>Nenhum filme favorito encontrado.</p>
      )}
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </ModalContainer>
  );
};

export default Modal;
