import React, { useState } from 'react'
import './pesquisar.css'
import {FaSearch} from 'react-icons/fa'

interface Filme {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    overview: string
}

type PesquisarProps = {
    setResultados: React.Dispatch<React.SetStateAction<Filme[]>>
}

export const Pesquisar: React.FC<PesquisarProps> = ({ setResultados }) => {
    const [input, setInput] = useState<string>("")
    const fetchDados = (entrada: string) => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5fafab7843ff239883cf22420e887df")
        .then((resposta) => resposta.json())
        .then((json) =>{
            const resultados = json.results.filter((filme:Filme) =>{
                return (
                    filme &&
                    filme.title &&
                    filme.title.toLowerCase().includes(entrada.toLowerCase())
                )
            })
            setResultados(resultados)
        })
    }
    const handleMudar = (entrada: string) => {
        setInput(entrada)
        fetchDados(entrada)
    }
    return (
        <div className='pesquisarea'>
            <div className='inputWrapper'>
                <FaSearch id='icone'/>
                <input placeholder='Pesquisar nome de filme'
                value={input}
                onChange={(e)=> handleMudar(e.target.value)}/>
            </div>
        </div>
    )
}