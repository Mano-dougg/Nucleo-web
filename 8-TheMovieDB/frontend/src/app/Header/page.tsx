// page.tsx
import Image from "next/image";
import "./header.css";
import { User } from "../../../service/User";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'; 

interface nomes {
    id: number;
    nome: string;
}

export default function Header() {

    const Usuario = new User();
    const [data, setData] = useState<nomes[] | null>(null);

    useEffect(() => {
        const loggedUserId = Cookies.get('Iddoparca');

        if (loggedUserId) {
            Usuario.listarall()
                .then((response) => {
                    const allData = response.data;
                    const filteredData = allData.filter((user: nomes) => user.id === parseInt(loggedUserId));
                    setData(filteredData);
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('Usuário out');
        }
    }, []);

    return (
        
        <header className='header-container'>

            <section className="esquerdo">
                <div className="nome-site">
                    <h1>POPMOVIES</h1>
                </div>

                <div className="icons-header">
                    <button> <p className="additional-content"> Ver filmes </p> </button> 
                    <button><p className="additional-content"> Meus favoritos </p> </button>     
                </div>
                
            </section>

            <section className="direito">

                <div className="pesquisar">
                    <button><Image src="/search.png" alt="Exemplo" width={30} height={30} /></button>
                </div>

                {data ? (
                    <div className="usuario">
                    {data.map((item) => (
                        <div key={item.id} className='nomes'>
                            <p className='nome'>Olá, {item.nome}</p>
                        </div>
                    ))}
                    </div>

                ) : (
                    <p>Carregando dados...</p>
                )}

            </section>

        </header>
    );
}
