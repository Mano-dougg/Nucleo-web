
import React, { Children, Key } from "react";
import Trash from "./icons/Trash";
import "../app/globals.css";
import axios from "axios";

const getData = async () => {
  const data = await axios.get("http://localhost:4040/mostrartodos");
  return data;
};

const deleteData = async (id: number) => {
  var numero = id;

  await axios.delete(`http://localhost:4040/deletar/${numero}`)

  const diminuir = await axios.get("http://localhost:4040/pegarBanco");

  let fila_atual = diminuir.data.quant_fila - 1;

  await axios.put('http://localhost:4040/atualizarBanco', {
    quant_fila: fila_atual
  });

  window.location.reload() 
}

const ListItem: React.FC = async () => {
  const data = await getData();
  return (
    <>
      {data.data.map(
        (todo: {
          id: Key;
          name: string;
          quant_paes: string;
          valor: string;
        }) => (
          <span
            key={todo.id}
            className="flex flex-row w-full min-w-[390px] bg-white bg-opacity-80 rounded-md p-4 items-center justify-between pr-6"
          >
            <div className="flex flex-col justify-between h-full gap-1.5">
              <h3 className="text-pbrown text-base font-bold">{todo.name}</h3>
              <div className="flex flex-row gap-4" id="item-list-amounts">
                <p className="text-pbrown text-xs font-normal">
                  <span className="font-bold">Total de pães: </span>
                  {`${todo.quant_paes} pães`}
                </p>
                <p className="text-pbrown text-xs font-normal">
                  <span className="font-bold">Total a pagar: </span>
                  {`R$ ${todo.valor}`}
                </p>
              </div>
            </div>
            <button onClick={()=>{deleteData(Number(todo.id))}}>
              <Trash />
            </button>
          </span>
        )
      )}
    </>
  );
};

export default ListItem;
