import axios from "axios";
import { Key } from "react";
import Image from "next/image";
import './listaFavoritos.css'

const getData = async () => {
    const data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1");
    return data;
  };


export default function listFavoritos(){
    return(
        <div>

        </div>
    )
}