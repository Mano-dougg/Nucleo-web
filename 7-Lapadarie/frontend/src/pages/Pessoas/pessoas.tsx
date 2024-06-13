import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from "../../../service/User";
import './pessoas.css';
import Image from 'next/image';

interface Da {
  id: number;
  nome: string;
  paes: number;
}

export default function Pessoas() {
  const [data, setData] = useState<Da[] | null>(null);
  const UserA = new User();

  useEffect(() => {
    UserA.listarall()
    .then((response)=>{
      console.log(response.data)
      setData(response.data);
    }).catch((error)=>{
      console.log(error)
    })
  }, []);

  const Apagar = async (id: number) => {
    try {
    if (data){
      await axios.delete(`http://localhost:3001/${id}`);
      setData(data.filter(item => item.id !== id));
    }
    } catch (error) {
      console.error('Erro', error);
    }
  }

  return (
    <>
      {data ? (
        <section className='container-pedidos'>
          {data.map((item) => (
            <div key={item.id} className='pedido'>

              <div className='all-pedido'>

                <div className='cliente'>
                  <p className='nome'>{item.nome}</p>
                  <div className='informacoes'>
                    <p>Total de pães: <span>{item.paes} pães</span></p>
                    <p>Total a pagar: <span>R$ {item.paes * 0.50}</span></p>
                  </div>
                </div>

                <div className='botoes'>
                  <button>
                    <Image
                      src="/lapis.png"
                      alt="Ícone de atualizar"
                      width={24}  
                      height={25} 
                    /> 
                  </button>

                  <button onClick={() => Apagar(item.id)}>
                    <Image
                      src="/deletar.svg"
                      alt="Ícone de deletar"
                      width={24}  
                      height={25} 
                    /> 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

      ) : (
        <p>Carregando dados...</p>
      )}
    </>
  );
}
  