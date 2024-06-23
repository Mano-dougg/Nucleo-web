import { Movie } from "@/types/movie.types";
import axios from "axios";

// busca um filme pelo nome
export async function getMovieByName(query : String): Promise<any>{
    try{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`);
    return response.data.results;

    } catch (error: any){
        console.error('Error fetching search results:', error);
        return[];
    }

}

// retorna filmes ordenados por popularidade
export async function getMoviesByPopularity(page : Number): Promise<Movie[]> {
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

          return moviesData;
    } catch (error: any){

        console.log(error);
        return [];

    }
}
