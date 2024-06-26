"use client";
import axios from "axios";
import { Key } from "react";
import Image from "next/image";
import './lista.css'
import like from '../../assets/coracao.png'

const getData = async () => {
    const data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1");
    return data;
  };

const cadastrarFav = async (id: Key, path: string, title: string) => {

    await axios.post("http://localhost:5000/favoritar", {
        userId: id,
        poster_path: path,
        title: title,
      }); 

      window.location.href = '/Favoritos';

}

export default async function Carrossel(){
    const data = await getData();
    // console.log(data.data.results)
    return(

    <div className="main-div">

    {data.data.results.map((todo: { id: Key; title: string; poster_path: string; release_date: string;}) => ( 

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
    )
}