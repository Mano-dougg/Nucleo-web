"use client"

import { useEffect, useState } from "react"
import "./favoritos.css";
import FilmeCard from "../components/filmeCard";
import NavBar from "../components/navBar";


interface Favorito {
    id: number;
    movieId: number;
    userId: number;
}
interface Filme {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    overview: string
}

function Favoritos(){

    const [listaFavoritos, setListaFavoritos] = useState<Favorito[]>([])
    const [userID, setUserID] = useState<number | null>(null)
    const [listaFilmes, setListaFilmes] = useState<Filme[]>([])
    const [filmesFiltrados, setFilmesFiltrados] = useState<Filme[]>([])

    const getFilmes = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5fafab7843ff239883cf22420e887df")
        .then(res => res.json())
        .then(json => setListaFilmes(json.results))
    }

    useEffect(()=>{
        getFilmes()
    }, [])
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]))
            setUserID(payload.userId)
        }
    }, [])

    useEffect(()=>{
        if (userID) {
            const getFavoritos = async () => {
                try {
                    const resposta = await fetch(`http://localhost:8080/usuario/${userID}/favoritos`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        //body: JSON.stringify({userID})
                    })
                    setListaFavoritos(await resposta.json())
                } catch (error) {
                    console.error('Erro ao obter favoritos:', error)
                }
            }
            getFavoritos()
        }
    }, [userID])
    console.log("ABRE")
    console.log(listaFavoritos[0])
    console.log("FECHA")

    useEffect(()=>{
        setFilmesFiltrados(listaFilmes.filter(item => {
            return listaFavoritos.some(jtem => jtem.movieId === item.id)
        }))
        console.log(filmesFiltrados)
    }, [listaFavoritos, listaFilmes])

    return(
        <>
            <NavBar />
            <h1 id="favtitulo">Seus filmes favoritos</h1>
            <div className="gradeFavoritos">
                {filmesFiltrados.map((Favorito)=>(
                    <FilmeCard
                    key={Favorito.id}
                    movieID={Favorito.id}
                    imagem={(Favorito.poster_path)}
                    data={Favorito.release_date}
                    titulo={Favorito.title}
                    descricao={Favorito.overview}
                    />
                ))}
            </div>
        </>
    )
}

export default Favoritos