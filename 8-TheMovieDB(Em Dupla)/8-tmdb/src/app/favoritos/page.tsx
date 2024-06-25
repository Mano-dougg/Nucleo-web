"use client"

import { useEffect, useState } from "react"
import "./favoritos.css";
import FilmeCard from "../components/filmeCard";
import NavBar from "../components/navBar";
import axios from "axios";


interface Favorito {
    id: number;
    poster_path: string;
    release_date: string;
    original_title: string;
    overview: string
}

function Favoritos(){

    const [listaFavoritos, setListaFavoritos] = useState<Favorito[]>([])
    const [userID, setUserID] = useState<number | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUserID(payload.id);
        }
    }, []);

    useEffect(()=>{
        if (userID) {
            const getFavoritos = async () => {
                try {
                    const resposta = await axios.get(`/usuario/${userID}/favoritos`)
                    const favoritos = resposta.data
                    const promisesFilmes = favoritos.map((favorito: { IDfilme: number }) =>
                        axios.get(`https://api.themoviedb.org/3/movie/${favorito.IDfilme}?api_key=f5fafab7843ff239883cf22420e887df`)
                    )
                    const filmes = await Promise.all(promisesFilmes)
                    const detalhes = filmes.map(resposta => resposta.data)
                    setListaFavoritos(detalhes)
                } catch (error) {
                    console.error('Erro ao obter favoritos:', error)
                }
            }
            getFavoritos()
        }
    }, [userID])

    console.log(listaFavoritos)

    return(
        <>
            <NavBar />
            <h1>Seus filmes favoritos</h1>
            <div className="gradeFavoritos">
                {listaFavoritos.map((Favorito)=>(
                    <FilmeCard
                    key={Favorito.id}
                    movieID={Favorito.id}
                    imagem={(Favorito.poster_path)}
                    data={Favorito.release_date}
                    titulo={Favorito.original_title}
                    descricao={Favorito.overview}
                    />
                ))}
            </div>
        </>
    )
}

export default Favoritos