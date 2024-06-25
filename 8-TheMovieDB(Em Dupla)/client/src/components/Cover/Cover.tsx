"use client";
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import Image from 'next/image';
import './Cover.css';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { User } from '@/types/types';

const Cover: React.FC = () => {
  const { selectedMovie } = useSelectedMovie();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      {selectedMovie ? (
        <div className='cover'>
          <div className='cover-poster'>
            <Image src={`https://image.tmdb.org/t/p/original${selectedMovie.backdropPath}`} alt={selectedMovie.title} width={1920} height={1080} className='cover-poster-img' />
          </div>
          <div className='cover-description'>
            <h1>{selectedMovie.title}</h1>

            <div className='cover-info'>
              <div className='rating'>
                <FaStar color="gold" className='fa-star'/> {selectedMovie.vote_average.toFixed(1)}
              </div>
              
              <button className='watchlist'>
                {user? <MdWatchLater className='watch'/> :<MdOutlineWatchLater className="watch"/>}
              </button>

              <button className='fav'>
                  {user? < FaHeart className='fav-heart'/> : <FaRegHeart className='fav-heart' /> }
              </button>
          </div>
            
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cover;