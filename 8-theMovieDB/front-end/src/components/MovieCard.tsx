"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import buttonFavorite from '../../public/button-favorite.svg';
import buttonFavorited from '../../public/button-favorited.svg';

interface MovieCardProps {
    banner: string;
    title: string;
    id: number,
    isFavorited: boolean,
    onFavoriteToggle: (id: number) => void,
}

const MovieCard: React.FC<MovieCardProps> = ({ banner, title, id, isFavorited, onFavoriteToggle }) => {
    const [favorite, setFavorite] = useState(isFavorited);

    const toggleFavorite = () => {
        setFavorite(!favorite);
        onFavoriteToggle(id);
    };

    useEffect(() => {
        setFavorite(isFavorited);
    }, [isFavorited]);

    return (
        <div className="movie-card" id={`${id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/w300${banner}`}
                alt={title}
                className="movie-banner"
                
                width={150}
                height={225}
            />
            <h2>{title}</h2>
            <button className="favorite-button" onClick={toggleFavorite}>
                <Image
                    src={favorite ? buttonFavorited : buttonFavorite}
                    alt={favorite ? 'botão para desfavoritar' : 'botão para favoritar'}
                    width={30}
                    height={30}
                />
            </button>
        </div>
    );
};

export default MovieCard;