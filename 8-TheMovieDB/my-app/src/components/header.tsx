"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/header.css';
import '../styles/global.css';
import INTNAME from '../assets/int-name.png'
import INTPOSTER from '../assets/Interstellar.jpg';
import FFPOSTER from '../assets/fastandfurious.jpg';
import OPPOSTER from '../assets/openheimer.jpg';
import SEARCH from '../assets/searchicon.png';
import SETA from '../assets/rightarrowicon.png';
import CORACAO from '../assets/heart.png';

const Header: React.FC = () => {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  const movies = [
    {
      title: 'Interstellar',
      postertext: INTNAME,
      poster: INTPOSTER,
      year: '2014',
      rating: '10+',
      duration: '2h 49min',
      genre: 'Ficção Científica',
      description: 'Em um futuro da Terra devastada por pragas, uma instigante procura pelo universo para descobrir um novo lar para a humanidade.',
    },
    {
      title: 'Velozes e Furiosos',
      postertext: INTNAME,
      poster: FFPOSTER,
      year: 'Ano do filme',
      rating: 'Classificação do filme',
      duration: 'Duração do filme',
      genre: 'Gênero do filme',
      description: 'Descrição do filme',
    },
    {
      title: 'Oppenheimer',
      postertext: INTNAME,
      poster: OPPOSTER,
      year: 'Ano do filme',
      rating: 'Classificação do filme',
      duration: 'Duração do filme',
      genre: 'Gênero do filme',
      description: 'Descrição do filme',
    },
  ];

  const handlePosterClick = (index: number) => {
    setCurrentPosterIndex(index);
  };

  const getCarouselItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentPosterIndex + i + movies.length) % movies.length;
      items.push(
        <div
          key={index}
          className={`carousel-item ${i === 0 ? 'active' : ''}`}
          onClick={() => handlePosterClick(index)}
        >
          <Image src={movies[index].poster} alt={`${movies[index].title} poster`} />
        </div>
      );
    }
    return items;
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <h2>RIANFLIX.</h2>
          <div className="search">
            <button>Login</button>
            <button className="btn-span">Cadastre-se</button>
            <Image className="searchicon" src={SEARCH} alt="search icon" />
            <input type="text" placeholder="Pesquise aqui" />
          </div>
        </ul>
      </nav>

      <div className="film-container">
        <div className="banner">
          <div className="banner-content">
            <Image className="poster-img" src={movies[currentPosterIndex].postertext} alt={`${movies[currentPosterIndex].title} poster`} />
            <h4>
              <span>{movies[currentPosterIndex].year}</span>
              <span>{movies[currentPosterIndex].rating}</span>
              <span>{movies[currentPosterIndex].duration}</span>
              <span>{movies[currentPosterIndex].genre}</span>
            </h4>
            <p>{movies[currentPosterIndex].description}</p>
            <div className="banner-btn">
              <button>
                <Image className="banner-btn-icon" src={SETA} alt="seta" />
                Ver mais
              </button>
              <button>
                <Image className="banner-btn-icon" src={CORACAO} alt='coração' />
                Adicionar aos favoritos
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-box">
          <div className="carousel">
            {getCarouselItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
