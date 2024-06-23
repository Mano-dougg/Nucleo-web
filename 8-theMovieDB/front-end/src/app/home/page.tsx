import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";


export default function Home() {
    return (
        <>
            <Header />
            <h1>Filmes:</h1>
            <main className="movies-grid">
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 1" />
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 2" />
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 3" />
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 4" />
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 5" />
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 6" />
                <MovieCard banner="https://img.elo7.com.br/product/685x685/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg" title="Filme 7" />
            </main>
        </>
    );
}
