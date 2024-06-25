'use client';
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import Image from 'next/image';
import './Cover.css';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { User } from '@/types/types';
import { addFavorite, addToWatchList, removeFromWatchList } from '@/server/userdb/movie.services';
import { getLoggedUser } from '@/server/userdb/users.services';

const Cover: React.FC = () => {
  const { selectedMovie } = useSelectedMovie();
  const [user, setUser] = useState<User | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWatch, setIsWatch] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      if (selectedMovie) {
        setIsFavorite(parsedUser.favorites.includes(selectedMovie.id));
        setIsWatch(parsedUser.watchList.includes(selectedMovie.id))
      }
    }
  }, [selectedMovie]);

  const handleAddFavorite = async () => {
    if (selectedMovie && user) {
      const request = await addFavorite(selectedMovie.id);
      const updatedUser = request?.data.data
      setUser(updatedUser);

      const included = updatedUser.favorites.includes(selectedMovie.id)
      setIsFavorite(included);
    } else {
      alert("faça login para favoritar um filme");
    }
  };

  const handleWatchList = async () => {
    if (selectedMovie && user) {
      const user = await getLoggedUser()
      const included = user?.data.watchList.includes(selectedMovie.id)

      if(included){
        const request = await removeFromWatchList(selectedMovie.id);
        const updatedUser = request?.data.data;

        setIsWatch(false)
        setUser(updatedUser);
      } else {
        const request = await addToWatchList(selectedMovie.id);
        const updatedUser = request?.data.data;

        setIsWatch(true)
        setUser(updatedUser);
        
      };
    } else {
      alert("faça login para adicionar um filme a watchlist");
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
              <button style={{'cursor': `pointer`}} className='watchlist' onClick={handleWatchList}>
                {isWatch ? <MdWatchLater className='watch' /> : <MdOutlineWatchLater className="watch" />}
              </button>
              <button className='fav' onClick={handleAddFavorite}>
                  {isFavorite?
                  <FaHeart className='fav-heart' />
                  :<FaRegHeart className='fav-heart'/>}
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



// 'use client';
// import { useSelectedMovie } from '@/context/SelectedMovieContext';
// import Image from 'next/image';
// import './Cover.css';
// import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
// import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';
// import { useEffect, useState } from 'react';
// import { User } from '@/types/types';
// import { addFavorite, addToWatchList, removeFromWatchList } from '@/server/userdb/movie.services';
// import { getLoggedUser } from '@/server/userdb/users.services';

// const Cover: React.FC = () => {
//   const { selectedMovie } = useSelectedMovie();
//   const [user, setUser] = useState<User | null>(null);
//   const [isFavorite, setIsFavorite] = useState<boolean>(false);
//   const [isWatch, setIsWatch] = useState<boolean>(false);
//   const [addMessage, setAddMessage] = useState<boolean>(false);
//   const [removeMessage, setRemoveMessage] = useState<boolean>(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//       if (selectedMovie) {
//         setIsFavorite(parsedUser.favorites.includes(selectedMovie.id));
//         setIsWatch(parsedUser.watchList.includes(selectedMovie.id))
//       }
//     }
//   }, [selectedMovie]);

//   const handleAddFavorite = async () => {
//     if (selectedMovie && user) {
//       const request = await addFavorite(selectedMovie.id);
//       const updatedUser = request?.data.data
//       setUser(updatedUser);

//       const included = updatedUser.favorites.includes(selectedMovie.id)
//       setIsFavorite(included);

//       if (included){
//         setAddMessage(true);
//         setTimeout(() => setAddMessage(false), 3000); 

//       } else{
//         setRemoveMessage(true);
//         setTimeout(() => setRemoveMessage(false), 3000); 
//       }
//     } else {
//       alert("faça login para favoritar um filme");
//     }
//   };

//   const handleWatchList = async () => {
//     if (selectedMovie && user) {
//       const user = await getLoggedUser()
//       const included = user?.data.watchList.includes(selectedMovie.id)

//       if(included){
//         const request = await removeFromWatchList(selectedMovie.id);
//         const updatedUser = request?.data.data;

//         setIsWatch(false)
//         setUser(updatedUser);
//         setAddMessage(true);
//         setTimeout(() => setAddMessage(false), 3000);
//       } else {
//         const request = await addToWatchList(selectedMovie.id);
//         const updatedUser = request?.data.data;

//         setIsWatch(true)
//         setUser(updatedUser);
//         setAddMessage(true);
//         setTimeout(() => setAddMessage(false), 3000);
        
//       };
//     } else {
//       alert("faça login para adicionar um filme a watchlist");
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
//               <button style={{'cursor': `pointer`}} className='watchlist' onClick={handleWatchList}>
//                 {isWatch ? <MdWatchLater className='watch' /> : <MdOutlineWatchLater className="watch" />}
//               </button>
//               <button className='fav' onClick={handleAddFavorite}>
//                   {isFavorite?
//                   <FaHeart className='fav-heart' />
//                   :<FaRegHeart className='fav-heart'/>}
//               </button>
//               {removeMessage? 
//               <p className='message'>Filme removido com sucesso!</p>
//               : addMessage && <p className='message'>Filme adicionado com sucesso!</p>}
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

