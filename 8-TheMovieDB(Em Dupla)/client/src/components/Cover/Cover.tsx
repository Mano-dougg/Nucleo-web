"use client";
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import Image from 'next/image';
import './Cover.css';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';

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
                <MdWatchLater className="watch"/>
              </button>

              <button className='fav'>
                  <FaRegHeart className='fav-heart'/>
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




// "use client";

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import './Cover.css'
// import { FaStar } from 'react-icons/fa';

// interface Movie {
//   title: string;
//   overview: string;
//   backdropPath: string;
// }

// const Cover: React.FC = () => {
//   const [movie, setMovie] = useState<Movie | null>(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         // Requisição para obter o filme em exibição
//         const movieResponse = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', {
//           headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ'
//           }
//         });

//         const firstMovie = movieResponse.data.results[0];
//         const movieId = firstMovie.id;

//         // Requisição para obter as imagens do filme
//         const imageResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
//           headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ'
//           }
//         });

//         const firstBackdrop = imageResponse.data.backdrops[0];

//         setMovie({
//           title: firstMovie.title,
//           overview: firstMovie.overview,
//           backdropPath: firstBackdrop.file_path
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovie();
//   }, []);

//   return (
//     <div>
//       {movie ? (
//         <div  className='cover'>

//           <div className='cover-poster'>
//             <Image src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`} alt={movie.title} width={1920} height={1080} className='cover-poster-img'/>
//           </div>

//         <div className='cover-description'>
//             <h1>{movie.title}</h1>
//             <div>
//             {/* <div className='rating'>
//                   <FaStar color="gold" className='fa-star'/> {movie.vote_average.toFixed(1)}
//             </div> */}
//             </div>
//             <p>{movie.overview}</p>
//         </div>

//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Cover;

