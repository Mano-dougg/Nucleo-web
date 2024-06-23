'use client';

import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { useSelectedMovie } from '@/context/SelectedMovieContext';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const { setSelectedMovie } = useSelectedMovie();

  const handleSearch = async () => {
    if (query.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`);
      setResults(response.data.results);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500); // Delay to avoid too many API calls

    return () => clearTimeout(timer);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleResultClick = (movie: Movie) => {
    setQuery(movie.title);
    setSelectedMovie({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      backdropPath: movie.backdrop_path || '', // Providing a default empty string
      vote_average: movie.vote_average,
    });
    setShowResults(false);
  };

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search for a movie, tv show or anime"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      {showResults && results.length > 0 && (
        <div className='search-results'>
          {results.map((movie) => (
            <div key={movie.id} className='search-result-item' onClick={() => handleResultClick(movie)}>
              <Image src={`https://image.tmdb.org/t/p/w92${movie.poster_path || ''}`} alt={movie.title} width={92} height={138} />
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;



// 'use client';

// import './SearchBar.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaSearch } from "react-icons/fa";
// import Image from 'next/image';

// interface Movie {
//   id: number;
//   title: string;
//   poster_path: string;
// }

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState<Movie[]>([]);
//   const [showResults, setShowResults] = useState<boolean>(false);

//   const handleSearch = async () => {
//     if (query.trim() === '') {
//       setResults([]);
//       setShowResults(false);
//       return;
//     }

//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`);
//       setResults(response.data.results);
//       setShowResults(true);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleSearch();
//     }, 500); // Delay to avoid too many API calls

//     return () => clearTimeout(timer);
//   }, [query]);

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const handleResultClick = (movie: Movie) => {
//     setQuery(movie.title);
//     setShowResults(false);
//     // Add any additional actions you want when a result is clicked
//   };

//   return (
//     <div className='search-bar-container'>
//       <div className='search-bar'>
//         <input
//           type="text"
//           placeholder="Search for a movie, tv show or anime"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <button onClick={handleSearch}>
//           <FaSearch />
//         </button>
//       </div>
//       {showResults && results.length > 0 && (
//         <div className='search-results'>
//           {results.map((movie) => (
//             <div key={movie.id} className='search-result-item' onClick={() => handleResultClick(movie)}>
//               <Image src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} width={92} height={92}/>
//               <span>{movie.title}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;


// 'use client';

// import './SearchBar.css'
// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div className='search-bar'>
//       <input
//         type="text"
//         placeholder="Search for a movie, tv show or anime"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={handleSearch}>
//         <FaSearch />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
