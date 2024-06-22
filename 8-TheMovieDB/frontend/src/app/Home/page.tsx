'use client'
import { useRouter } from "next/navigation";
import "./home.css";
import Header from "../Header/page";
import { User } from "../../../service/User";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'; 

interface nomes {
    id: number;
    nome: string;
}

export default function Home() {
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
        <>
            {data ? (
                <section>
                    {data.map((item) => (
                        <>
                            <Header />
                            <div key={item.id} className='nomes'>
                                <p className='nome'>Olá, {item.nome}</p>
                            </div>
                        </>
                    ))}
                </section>
            ) : (
                <p>Carregando dados...</p>
            )}
        </>
    );
}