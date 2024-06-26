"use client"

import { useEffect, useState } from "react"
import "./filmes.css";
import FilmeCard from "../components/filmeCard";
import NavBar from "../components/navBar";


interface Filme {
    id: number;
    poster_path: string;
    release_date: string;
    original_title: string;
    overview: string
}

function Filmes(){

    const [listaFilmes, setListaFilmes] = useState<Filme[]>([])

    const getFilmes = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5fafab7843ff239883cf22420e887df")
        .then(res => res.json())
        .then(json => setListaFilmes(json.results))
    }

    useEffect(()=>{
        getFilmes()
    }, [])

    console.log(listaFilmes)

    return(
        <>
            <NavBar />
            <div className="gradeFilmes">
                {listaFilmes.map((filme)=>(
                    <FilmeCard
                    key={filme.id}
                    movieID={filme.id}
                    imagem={(filme.poster_path)}
                    data={filme.release_date}
                    titulo={filme.original_title}
                    descricao={filme.overview}
                    />
                ))}
            </div>
        </>
    )
}

export default Filmes