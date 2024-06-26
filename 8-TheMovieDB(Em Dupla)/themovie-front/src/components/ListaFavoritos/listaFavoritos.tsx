'use client';
import axios from "axios";
import { Key } from "react";
import Image from "next/image";
import './listaFavoritos.css'
import like from '../../assets/coracao.png'
import { get } from "http";

const getData = async () => {
    const data = await axios.get("http://localhost:5000/listarfavs");
    return data;
};

const removerFav = (title: string) => {
    axios.delete(`http://localhost:5000/deletar/${title}`); 
    window.location.reload();
}


export default async function ListaFavoritos(){
    const dados = await getData();
    // console.log(dados.data)
    return(
        <div className="main-div-fav">

            {dados.data.map((todo: { id: Key; title: string; poster_path: string;}) => ( 

            <div key={todo.id} className="div-filme"> 
                <div className="dentro-filme">
                    <Image src={'https://image.tmdb.org/t/p/w500'+ todo.poster_path} alt="" width={150} height={201}/>
                    <p>{todo.title}</p>
                    <Image onClick={()=>removerFav(todo.title)} src={like} alt="" width={25} height={25} id="like"></Image>
                </div>
            </div>

            )
            )}
        </div>
    )
}