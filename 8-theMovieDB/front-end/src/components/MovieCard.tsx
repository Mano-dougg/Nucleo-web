"use client"

import { useState } from 'react';
import Image from 'next/image';
import buttonFavorite from '../../public/button-favorite.svg';
import buttonFavorited from '../../public/button-favorited.svg';

interface MovieCardProps {
    banner: string;
    title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ banner, title }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="movie-card">
            <Image src={`https://image.tmdb.org/t/p/w300${banner}`} alt={title} className="movie-banner" layout="responsive" width={150} height={225} />
            <h2>{title}</h2>
            <button className="favorite-button" onClick={toggleFavorite}>
                <Image
                    src={isFavorited ? buttonFavorited : buttonFavorite}
                    alt={isFavorited ? 'botão para desfavoritar' : 'botão para favoritar'}
                    width={30}
                    height={30}
                />
            </button>
        </div>
    );
};

export default MovieCard;
