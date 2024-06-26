"use client";
import './pesquisa.css'
import Base from "../../components/Base/base";
import Topo from "../../components/Topo/topo";
import axios from 'axios';
import { Key } from 'react';
import Image from 'next/image';
import like from '../../assets/coracao.png'

const getNome = async () => {
    const data = await axios.get("http://localhost:5000/analisar");
    // {data.data.map}
    console.log(data.data)
    const dados = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${data.data.title}&api_key=04c35731a5ee918f014970082a0088b1`);
    return dados;
  };

  const cadastrarFav = async (id: Key, path: string, title: string) => {

    await axios.post("http://localhost:5000/favoritar", {
        userId: id,
        poster_path: path,
        title: title,
      }); 

      window.location.href = '/Favoritos';

}



export default async function Pesquisa(){
    const oi = await getNome()
    // console.log(oi)
    return(
        <div>
            <Topo />
                <div className='titulo-pesquisa'>
                    <h1>Resultado da pesquisa:</h1>
                </div>
                <div className='div-pesquisa'>
                    {oi.data.results.map((todo: { id: Key; title: string; poster_path: string; release_date: string;}) => ( 

                    <div key={todo.id} className="div-filme"> 
                    <div className="dentro-filme">
                    <Image src={'https://image.tmdb.org/t/p/w500'+ todo.poster_path} alt="" width={150} height={201}/>
                    <p>{todo.title}</p>
                    <Image onClick={()=>cadastrarFav( 1, todo.poster_path, todo.title)} src={like} alt="" width={25} height={25} id="like"></Image>
                    </div>
                    </div>

                    )

                    )}
                </div>
            <Base />
        </div>
    )
}