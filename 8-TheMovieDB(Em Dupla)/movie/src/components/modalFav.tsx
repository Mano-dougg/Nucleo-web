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
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 100;
  max-width: 500px;
  width: 100%;
  font-family: 'Arial Black', sans-serif;
`;

const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MovieItem = styled.li`
  margin-bottom: 12px;
  padding: 12px;
  background-color: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e8e8e8;
    transform: translateY(-2px);
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #333;
  font-family: 'Arial Black', sans-serif;
`;

const Paragraph = styled.p`
  color: #333;
  font-family: 'Arial Black', sans-serif;
`;

const CloseButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-family: 'Arial Black', sans-serif;

  &:hover {
    background-color: #ff6666;
    transform: translateY(-2px);
  }
`;

interface Movie {
  id: number;
  title: string;
}

interface ModalProps {
  onClose: () => void;
  userId: number; 
}

const Modal: React.FC<ModalProps> = ({ onClose, userId }) => {
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

      const response = await axios.get<Movie[]>(`http://localhost:1080/favoritos?userId=${userId}`, {
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
        <Paragraph>Nenhum filme na sua lista de favoritos.</Paragraph>
      )}
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </ModalContainer>
  );
};

export default Modal;
