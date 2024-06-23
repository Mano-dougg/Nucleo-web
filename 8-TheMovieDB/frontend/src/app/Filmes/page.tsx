import { GetServerSideProps } from 'next';
import axios from 'axios';
import { NextPage } from 'next';
import "./filmes.css";


interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

interface HomePageProps {
    movies: Movie[];
}

const Filmes: NextPage<HomePageProps> = ({ movies }) => {
    return (
        <div>
            <h1>Filmes</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Lançamento: {movie.release_date}</p>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <button>Favoritar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filmes;