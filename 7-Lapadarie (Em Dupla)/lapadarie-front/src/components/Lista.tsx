import axios, { AxiosResponse } from "axios";
import Modal from "./Modal";
import CardClient from "./ui/CardClient";
import { Key, SyntheticEvent, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Header from "./Header";

type Item = {
  // ESTE tipo é mudável! implementado apenas para testes
  id: number;
  nome: string;
  email: string;
  senha: string;
  idade: number;
  estado: string;
  cidade: string;
};

const Lista = () => {
  //estados para salvar os dados dos usuários!
  const [dados, setDados] = useState<any[]>([]);
  const [pessoasfila, adicionarFila] = useState<number>(0);
  const [paesVendidos, setPaesVendidos] = useState<number>(0);
  const [entrada, setEntrada] = useState<number>(0);

  // atualiza cada vez a variável dados é mudada
  //Função para retornar todos os users
  const fetchDados = async () => {
    /* const res: AxiosResponse = await axios.get("http://localhost:3001/usuario");
    const data = res.data.users;
    setDados(data); */
  };

  useEffect(() => {
    fetchDados();
  }, []);

  //Função assíncrona para deletar usuário, é chamada ao clicar na lixeira
  const handleDelete = async (id: string) => {
    try {
      /* const req = await axios.delete(
        `http://localhost:3001/usuario/deletar/${id}` // API teste
      ); */
      fetchDados();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className="flex h-screen gap-4 w-full flex-col justify-between">
      <Header
        pessoasFila={pessoasfila}
        paesVendidos={paesVendidos}
        entrada={`R$ ${entrada}`}
      />
      <div className=" h-screen w-full">
        <section className="w-full flex items-center justify-center">
          <div className="min-w-[80%] h-auto flex flex-col px-5 md:max-w-[1235px] md:w-[1235px]">
            <Modal atualizar={() => fetchDados()} />
            {/* Map para retornar todos os users */}
            {/* {dados?.map((item: Item) => (
              <CardClient
                cliente={item.nome}
                totalPao={item.email}
                totalPagar={`R$ ${item.id}`}
                key={item.id}
                evento={() => handleDelete(item.id.toString())}
              />
            ))} */}
            <CardClient
              cliente={"Vladmir"}
              totalPao={"pao"}
              totalPagar={`R$ ${"din"}`}
              evento={() => handleDelete("item.id".toString())}
            />
            <CardClient
              cliente={"Vladmir"}
              totalPao={"pao"}
              totalPagar={`R$ ${"din"}`}
              evento={() => handleDelete("item.id".toString())}
            />
          </div>
        </section>
        <footer className="w-full text-bg-card2 flex justify-center py-20">
        Com 💛 Info Jr UFBA 2022
      </footer>
      </div>
    </main>
  );
};

export default Lista;
