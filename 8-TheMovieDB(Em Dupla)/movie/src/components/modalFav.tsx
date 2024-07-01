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
<<<<<<< HEAD
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 100;
  max-width: 500px;
  width: 100%;
  font-family: 'Arial Black', sans-serif;
=======
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
`;

const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
<<<<<<< HEAD
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
=======
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
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
  }
`;

const ModalTitle = styled.h2`
<<<<<<< HEAD
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
=======
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
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
  }
`;

interface Movie {
  id: number;
  title: string;
}

interface ModalProps {
  onClose: () => void;
<<<<<<< HEAD
  userId: number; 
}

const Modal: React.FC<ModalProps> = ({ onClose, userId }) => {
=======
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
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

<<<<<<< HEAD
      const response = await axios.get<Movie[]>(`http://localhost:1080/favoritos?userId=${userId}`, {
=======
      const response = await axios.get<Movie[]>('http://localhost:1080/favoritos', {
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
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
<<<<<<< HEAD
        <Paragraph>Nenhum filme na sua lista de favoritos.</Paragraph>
=======
        <p>Nenhum filme favorito encontrado.</p>
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
      )}
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </ModalContainer>
  );
};

export default Modal;
