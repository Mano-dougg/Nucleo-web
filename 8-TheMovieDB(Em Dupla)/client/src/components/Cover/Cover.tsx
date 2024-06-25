'use client';
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import Image from 'next/image';
import './Cover.css';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { User } from '@/types/types';
import { addFavorite } from '@/server/userdb/movie.services';

const Cover: React.FC = () => {
  const { selectedMovie } = useSelectedMovie();
  const [user, setUser] = useState<User | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [addMessage, setAddMessage] = useState<boolean>(false);
  const [removeMessage, setRemoveMessage] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      if (selectedMovie) {
        setIsFavorite(parsedUser.favorites.includes(selectedMovie.id));
      }
    }
  }, [selectedMovie]);

  const handleAddFavorite = async () => {
    if (selectedMovie && user) {
      await addFavorite(selectedMovie.id);
      const updatedUser = JSON.parse(localStorage.getItem('user')!);
      setUser(updatedUser);

      const removed = updatedUser.favorites.includes(selectedMovie.id)
      setIsFavorite(removed);

      if (!removed){
        setAddMessage(true);
        setTimeout(() => setAddMessage(false), 3000); 

      } else{
        setRemoveMessage(true);
        setTimeout(() => setRemoveMessage(false), 3000); 
      }
    } else {
      alert("faça login para favoritar um filme");
    }
  };

  return (
    <div>
      {selectedMovie ? (
        <div className='cover'>
          <div className='cover-poster'>
            <Image
              src={`https://image.tmdb.org/t/p/original${selectedMovie.backdropPath}`}
              alt={selectedMovie.title}
              width={1920}
              height={1080}
              className='cover-poster-img'
            />
          </div>
          <div className='cover-description'>
            <h1>{selectedMovie.title}</h1>
            <div className='cover-info'>
              <div className='rating'>
                <FaStar color="gold" className='fa-star' /> {selectedMovie.vote_average.toFixed(1)}
              </div>
              <button className='watchlist'>
                {user ? <MdWatchLater className='watch' /> : <MdOutlineWatchLater className="watch" />}
              </button>
              <button className='fav' onClick={handleAddFavorite}>
                  <FaHeart className='fav-heart' />
              </button>
              {addMessage && <p className='message'>Filme adicionado aos favoritos!</p>}
              {removeMessage && <p className='message'>Filme removido dos favoritos!</p>}
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




// 'use client';
// import { useSelectedMovie } from '@/context/SelectedMovieContext';
// import Image from 'next/image';
// import './Cover.css';
// import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
// import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';
// import { useEffect, useState } from 'react';
// import { User } from '@/types/types';
// import { addFavorite } from '@/server/userdb/movie.services';

// const Cover: React.FC = () => {
//   const storedUser = localStorage.getItem('user');

//   const { selectedMovie } = useSelectedMovie();
//   const [user, setUser] = useState<User | null>(storedUser? JSON.parse(storedUser) : null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, [user]);

//   const handleAddFavorite = async () => {
//     if (selectedMovie && user) {
//       await addFavorite(selectedMovie.id);
//       const storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     }
//   };

//   return (
//     <div>
//       {selectedMovie ? (
//         <div className='cover'>
//           <div className='cover-poster'>
//             <Image
//               src={`https://image.tmdb.org/t/p/original${selectedMovie.backdropPath}`}
//               alt={selectedMovie.title}
//               width={1920}
//               height={1080}
//               className='cover-poster-img'
//             />
//           </div>
//           <div className='cover-description'>
//             <h1>{selectedMovie.title}</h1>
//             <div className='cover-info'>
//               <div className='rating'>
//                 <FaStar color="gold" className='fa-star' /> {selectedMovie.vote_average.toFixed(1)}
//               </div>
//               <button className='watchlist'>
//                 {user ? <MdWatchLater className='watch' /> : <MdOutlineWatchLater className="watch" />}
//               </button>
//               <button className='fav' onClick={handleAddFavorite}>
//                 {user?.favorites.includes(selectedMovie.id) ? (
//                   <FaHeart className='fav-heart' />
//                 ) : (
//                   <FaRegHeart className='fav-heart' />
//                 )}
//               </button>
//             </div>
//             <p>{selectedMovie.overview}</p>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Cover;
