import { GetServerSideProps } from 'next';
import axios from 'axios';
import { NextPage } from 'next';
import "./filmeshome.css";
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

const FilmesHome: NextPage<HomePageProps> = ({ movies }) => {
    const handleFavoritar = (movie: Movie) => {
        const idsFavoritos = Cookies.get("Ida");
        let idsArray = idsFavoritos ? JSON.parse(idsFavoritos) : [];
        
        if (!idsArray.includes(movie.id)) {
            idsArray.push(movie.id);
            Cookies.set('Ida', JSON.stringify(idsArray), { expires: 1 });
        }
    };
    return (
        <div className='filmeshome-page'>
            <ul className='filmeshome-card'>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <button onClick={() => handleFavoritar(movie)}>Favoritar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmesHome;