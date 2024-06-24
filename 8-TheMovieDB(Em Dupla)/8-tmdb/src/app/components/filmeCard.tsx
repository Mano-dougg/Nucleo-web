import { useEffect, useState } from "react";
import "./filmeCard.css"

interface FilmeCardProps {
    imagem: string;
    titulo: string;
    descricao: string;
    data: string
}

const FilmeCard: React.FC<FilmeCardProps> = ({imagem, titulo, descricao, data}) => {
    const [logado, setLogado] = useState<boolean>(false)
    

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token')
            setLogado(!!token)
        }
    }, [])

    return (
        <div className="filmeCard">
            <img src={`https://image.tmdb.org/t/p/w500${imagem}`} />
            <div>
                <h1>{titulo}</h1>
                <h2>{data}</h2>
                <p>{descricao}</p>
                {logado && (
                    <button>Favoritar</button>
                )}
            </div>
        </div>
    )
}

export default FilmeCard