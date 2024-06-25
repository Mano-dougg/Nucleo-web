import { useEffect, useState } from "react";
import "./filmeCard.css"
import { Favoritos } from "@prisma/client";
import axios from "axios";

interface FilmeCardProps {
    movieID: number;
    imagem: string;
    titulo: string;
    descricao: string;
    data: string
}

const FilmeCard: React.FC<FilmeCardProps> = ({imagem, titulo, descricao, data, movieID}) => {
    const [logado, setLogado] = useState<boolean>(false)
    const [userID, setUserID] = useState<number | null>(null)
    const [listaFavoritos, setListaFavoritos] = useState<Favoritos[]>([])
    const [favoritado, setFavoritado] = useState<boolean>(false)


    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token')
            setLogado(!!token)
            if (token){
                const payload = JSON.parse(atob(token.split('.')[1]))
                setUserID(payload.id)
            }
        }
    }, [])

    useEffect(()=>{
        if (userID) {
            const getFavoritos = async () => {
                try {
                    const resposta = await axios.get(`/usuario/${userID}/favoritos`)
                    setListaFavoritos(resposta.data)
                    setFavoritado(listaFavoritos.some((favorito: any) => favorito.movieId === userID))
                } catch (error) {
                    console.error('Erro ao obter favoritos:', error)
                }
            }
            getFavoritos()
        }
    }, [userID])

    const handleFavoritar = () => {
        const token = localStorage.getItem('token')
        if (!token) return

        if (favoritado) {
            axios.delete(`/usuario/${userID}/favoritos/${movieID}`)
            .then(response => {
                if (response.status === 200) {
                    setFavoritado(false)
                }
            })
            .catch(error => console.error('Erro ao remover dos favoritos:', error))
        } else {
            axios.post(`/usuario/${userID}/favoritos/${movieID}`)
            .then(response => {
                if (response.status === 200) {
                    setFavoritado(true)
                }
            })
            .catch(error => console.error('Erro ao adicionar aos favoritos:', error))
        }
    }

    return (
        <div className="filmeCard">
            <img src={`https://image.tmdb.org/t/p/w500${imagem}`} />
            <div>
                <h1>{titulo}</h1>
                <h2>{data}</h2>
                <p>{descricao}</p>
                {logado && (
                    <button
                        className={favoritado ? "desfavoritar" : "favoritar"}
                        onClick={handleFavoritar}
                    >{favoritado ? "Desfavoritar" : "Favoritar"}</button>
                )}
            </div>
        </div>
    )
}

export default FilmeCard