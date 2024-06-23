import "./filmeCard.css"

interface FilmeCardProps {
    imagem: string;
    titulo: string;
    descricao: string;
    data: string
}

const FilmeCard: React.FC<FilmeCardProps> = ({imagem, titulo, descricao, data}) => {
    return (
        <div className="filmeCard">
            <img src={`https://image.tmdb.org/t/p/w500${imagem}`} />
            <div>
                <h1>{titulo}</h1>
                <h2>{data}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default FilmeCard