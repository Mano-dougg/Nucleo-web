"use client";
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import Image from 'next/image';
import './Cover.css';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';

const Cover: React.FC = () => {
  const { selectedMovie } = useSelectedMovie();

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
                <MdOutlineWatchLater className="watch"/>
              </button>

              <button className='fav'>
                  <FaRegHeart className='fav-heart' />
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