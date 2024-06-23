"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'; 
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelectedMovie } from '@/context/SelectedMovieContext';
import './MovieList.css'; 

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdropPath: string;
  vote_average: number;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { setSelectedMovie } = useSelectedMovie();

  const fetchMovies = async (page: number) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ'
        }
      });

      const moviesData = response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdropPath: movie.backdrop_path,
        vote_average: movie.vote_average,
      }));

      if (moviesData.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCardClick = (movie: Movie) => {
    setSelectedMovie(movie);
    scrollToTop();
  };

  if (loading && page === 1) {
    return <p>Loading...</p>;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more movies to load</p>}
    >
      <div className='container'>
        {movies.map((movie) => (
          <div key={movie.id} className='card' onClick={() => handleCardClick(movie)}>
            <div className='card-poster'>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                alt={movie.title}
                width={1000}
                height={280}
                className='card-poster-img'
              />
            </div>
            <div className='card-details'>
              <h2>{movie.title}</h2>
              <div className='hidden-info'>
                <div className='rating'>
                  <FaStar color="gold" className='fa-star'/> {movie.vote_average.toFixed(1)}
                </div>
                <button className='fav'>
                  <FaRegHeart/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default MovieList;



// "use client";
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'; 
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './MovieList.css'; 

// interface Movie {
//   id: number;
//   title: string;
//   overview: string;
//   backdropPath: string;
//   vote_average: number;
// }

// const MovieList: React.FC = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [page, setPage] = useState<number>(0);
//   const [hasMore, setHasMore] = useState<boolean>(true);

//   const fetchMovies = async (page: number) => {
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, {
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ'
//         }
//       });

//       const moviesData = response.data.results.map((movie: any) => ({
//         id: movie.id,
//         title: movie.title,
//         overview: movie.overview,
//         backdropPath: movie.backdrop_path,
//         vote_average: movie.vote_average,
//       }));

//       if (moviesData.length === 0) {
//         setHasMore(false);
//       } else {
//         setMovies((prevMovies) => [...prevMovies, ...moviesData]);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMovies(page);
//   }, [page]);

//   const fetchMoreData = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   if (loading && page === 1) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <InfiniteScroll
//       dataLength={movies.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//       endMessage={<p>No more movies to load</p>}
//     >
//       <div className='container'>
//         {movies.map((movie) => (
//           <div key={movie.id} className='card'>
//             <div className='card-poster'>
//               <Image
//                 src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
//                 alt={movie.title}
//                 width={1000}
//                 height={280}
//                 className='card-poster-img'
//               />
//             </div>
//             <div className='card-details'>
//               <h2>{movie.title}</h2>
//               <div className='hidden-info'>
//                 <div className='rating'>
//                   <FaStar color="gold" className='fa-star'/> {movie.vote_average.toFixed(1)}
//                 </div>
//                 <button className='fav'>
//                   <FaRegHeart/>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </InfiniteScroll>
//   );
// };

// export default MovieList;


// "use client";

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'; 
// import './MovieList.css'; 

// interface Movie {
//   id: number;
//   title: string;
//   overview: string;
//   backdropPath: string;
//   vote_average: number;
// }

// const MovieList: React.FC = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', {
//           headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDc2NjMyZjQ1ZWRiZGE5OWI1NjcxMzg4Y2I5M2FkMiIsIm5iZiI6MTcxOTAwODkxMS4xODE3MzgsInN1YiI6IjY2NzVmYzE4MGI1N2RlNjRiNjhiODhmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJltDl8NSL1uIzFOsbDaosC2_e_UMx3lp6BZ5a0ZIEQ'
//           }
//         });

//         const moviesData = response.data.results.map((movie: any) => ({
//           id: movie.id,
//           title: movie.title,
//           overview: movie.overview,
//           backdropPath: movie.backdrop_path,
//           vote_average: movie.vote_average,
//         }));

//         setMovies(moviesData);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className='container'>
//       {movies.map((movie) => (
//         <div key={movie.id} className='card'>

//         <div className='card-poster'>
//             <Image
//                 src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
//                 alt={movie.title}
//                 width={1000}
//                 height={280}
//                 className='card-poster-img'
//             />
//         </div>

//             <div className='card-details'>
//                 <h2>{movie.title}</h2>
//                 {/* <p>{movie.overview}</p> */}

//                 <div className='hidden-info'>
//                   <div className='rating'>
//                       <FaStar color="gold" className='fa-star'/> {movie.vote_average.toFixed(1)}
//                   </div>

//                   <button className='fav'>
//                     <FaRegHeart/>
//                     {/* <FaHeart /> */}
//                   </button>

//                 </div>

//             </div>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;
