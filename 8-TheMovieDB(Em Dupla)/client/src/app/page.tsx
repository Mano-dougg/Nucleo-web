import MovieList from '@/components/MovieList/MovieList';
import './page.css'
import Cover from '@/components/Cover/Cover';
import { SelectedMovieProvider } from '@/context/SelectedMovieContext';
import HeaderHome from '@/components/HeaderHome/HeaderHome';

export default function Home() {


  return (
    <main>
    <SelectedMovieProvider>
      <HeaderHome/>
      
        <Cover/>
          <section className="now-playing">
            <h1> Filmes </h1>
            <MovieList/>
          </section>  

    </SelectedMovieProvider>
    </main>
  );
}
