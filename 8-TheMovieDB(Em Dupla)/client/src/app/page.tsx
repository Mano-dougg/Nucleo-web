
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
