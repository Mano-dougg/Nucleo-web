'use client'
import { useRouter } from "next/navigation";
import "./home.css";
import Header from "../Header/page";
import { User } from "../../../service/User";
import { useEffect, useState } from "react";

interface nomes {
    id : number;
    nome : string;
}
export default function Home() {
    const Usuario = new User();
    const [data, setData] = useState<nomes[] | null>(null);

    useEffect(() => {
        Usuario.listarall()
        .then((response)=>{
          console.log(response.data)
          setData(response.data);
        }).catch((error)=>{
          console.log(error)
        })
      }, []);

      return (
        <>
          {data ? (
            <section>
              {data.map((item) => (
                <>
                <Header/>
                <div key={item.id} className='nomes'>
                <p className='nome'>{item.nome}</p>
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