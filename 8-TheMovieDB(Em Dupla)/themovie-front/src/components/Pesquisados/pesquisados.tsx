"use client";
import './pesquisados.css'

import axios from 'axios';
import { Key, useState } from 'react';
import Image from 'next/image';
import like from '../../assets/coracao.png'
import lupa from '../../assets/Lupa.png'


interface testeFilme {
    id: number;
    title: string;
    poster_path: string;
}

const cadastrarFav = async (id: Key, path: string, title: string) => {

    await axios.post("http://localhost:5000/favoritar", {
        userId: id,
        poster_path: path,
        title: title,
      }); 

      window.location.href = '/Favoritos';

}


export default function Pesquisados() {

    const [title, setTitle] = useState('')
    const [dado, setDado] = useState <testeFilme | null>(null);


    const enviar = () => {
        if(title.trim()){
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key:'04c35731a5ee918f014970082a0088b1',
                    query: title
                }
            }) 
                .then((response) => {
                    if (response.data.results && response.data.results.length > 0) {
                        const resultado = response.data.results[0]
                        alert(resultado.title)
                        setDado({
                            id: resultado.id,
                            title: resultado.title,
                            poster_path: resultado.poster_path
                        })
                        alert(dado?.title)
                    } else {setDado(null);}
                })
                .catch((error) => {
                    setDado(null);
                  });
        }
    }

    return(

        <div className='div-mae-pesquisa'>
                <div className='barra-pesquisa'>
                    <form id='form-main'>
                    <input type='text' 
                    placeholder='Pesquisar filme'
                    name='guardar'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                     <button onClick={()=>enviar()} type='submit' id='imagem-pesquisa'><Image src={lupa} alt=''/></button>
                     </form>
                    
                </div>



                
                {dado && (               
                    <><div className='titulo-pesquisa'>
                        <h2>Resultado da pesquisa:</h2>
                    </div>
                    <div className='div-pesquisa'>
                        <div className="div-filme">
                            <div className="dentro-filme">
                                <Image src={'https://image.tmdb.org/t/p/w500' + dado?.poster_path} alt="" width={150} height={201} />
                                <p>{dado?.title}</p>
                                <Image onClick={() => cadastrarFav(1, dado.poster_path, dado.title)} src={like} alt="" width={25} height={25} id="like"></Image>
                            </div>
                        </div>
                    </div></> 
                )}

        </div>
    )
    
}