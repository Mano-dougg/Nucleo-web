import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from "../../../service/User";

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
    <div>
      {data ? (
        <div>
          <h1>Clientes</h1>
          {data.map((item) => (
            <div key={item.id}>
              <p>{item.nome}: {item.paes} pães</p>
              <button onClick={() => Apagar(item.id)}>Deletar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}
  