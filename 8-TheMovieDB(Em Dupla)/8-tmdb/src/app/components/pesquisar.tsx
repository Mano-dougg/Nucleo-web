import React, { useState } from 'react'
import './pesquisar.css'
import {FaSearch} from 'react-icons/fa'

export const Pesquisar = () => {
    const [input, setInput] = useState<string>("")
    const fetchDados = (entrada: string) => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5fafab7843ff239883cf22420e887df")
        .then((resposta) => resposta.json())
        .then((json) =>{
            console.log(json.results)
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