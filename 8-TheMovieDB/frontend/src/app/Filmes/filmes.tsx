import { GetServerSideProps } from 'next';
import axios from 'axios';
import { NextPage } from 'next';
import "./filmes.css";
import Cookies from 'js-cookie'; 


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
    const handleFavoritar = (movie: Movie) => {
        const idsFavoritos = Cookies.get("IdsFavoritos");
        let idsArray = idsFavoritos ? JSON.parse(idsFavoritos) : [];
        
        if (!idsArray.includes(movie.id)) {
            idsArray.push(movie.id);
            Cookies.set('IdsFavoritos', JSON.stringify(idsArray), { expires: 1 });
        }
    };
    return (
            <div className='filmes-page'>
                <ul className='filmes-card'>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>Lançamento: {movie.release_date}</p>
                            <p>{movie.overview}</p>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <button onClick={() => handleFavoritar(movie)}>Favoritar</button>
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default Filmes;