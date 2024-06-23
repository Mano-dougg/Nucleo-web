// "use client";

// import MovieList from '@/components/MovieList/MovieList';
// import './page.css'
// import Cover from '@/components/Cover/Cover';
// import { useState } from 'react';
// import MovieCover from '@/components/MovieCover/MovieCover';

// interface Movie {
//   id: number;
//   title: string;
//   overview: string;
//   backdropPath: string;
//   vote_average: number;
// }

// export default function Home() {

//   const [coverMovie, setCoverMovie] = useState<Movie | null>(null);

//   return (
//     <main>

//     {coverMovie? 
//     <MovieCover/> : ""}

//     <section className="now-playing">
//       <h1> Filmes </h1>
//       <MovieList/>
//     </section>  

//     </main>
//   );
// }



import MovieList from '@/components/MovieList/MovieList';
import './page.css'
import Cover from '@/components/Cover/Cover';

export default function Home() {


  return (
    <main>

    <Cover/>

    <section className="now-playing">
      <h1> Filmes </h1>
      <MovieList/>
    </section>  

    </main>
  );
}
