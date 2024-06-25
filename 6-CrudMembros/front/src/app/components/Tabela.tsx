"use client"
import '../globals.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useModal } from '../contexts/ModalContexts';
import { deletarUsuario, listarUsuarios, pesquisarUsuarioPorEmail, pesquisarUsuarioPorId, pesquisarUsuarioPorNome } from '../services/api';
//-- ASSETS
import { FaSearch } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa6';
//-- TYPES
import { Usuario, Pesquisa, Filtro, InputID, InputEmail } from '../types/types';


//-- FUNCTION
const Tabela: React.FC = () => {
  const { toggleModalUm, toggleModalDois } = useModal();

  const [usuarios, setUsuarios] = useState<Usuario[]>([{id: 0, nome: 'Fulano', idade: 18, email: 'fulano@gmail', senha: 'lala', cidade:'Salvador', estado: 'Bahia'}]);
  const [pesquisa, setPesquisa] = useState<any>(0);
  const [filtro, setFiltro] = useState<any>([{}]);
  const [ pesquisaTipo, setPesquisaTipo ] = useState<string>('id');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await listarUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error('Erro ao obter usuários:', error);
      }
    };
    fetchUsuarios();
  }, []);

  const fPesquisa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
  };

  const fPesquisaTipo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisaTipo(event.target.value);
  };

  const fResultados = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data;
      if (pesquisaTipo === 'id' && /^[0-9]+$/.test(pesquisa)) {
        data = await pesquisarUsuarioPorId(pesquisa);
      } else if (pesquisaTipo === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pesquisa)) {
        data = await pesquisarUsuarioPorEmail(pesquisa);
      } else if (pesquisaTipo === 'nome') {
        data = await pesquisarUsuarioPorNome(pesquisa);
      } else {
        console.error('Invalid search type or format');
        return;
      }
      setFiltro(data);
    } catch (error) {
      console.error('Erro ao tentar obter usuário:', error);
    }
  };

  const fDelete = async (id: number | undefined) => {
    if (id === undefined) {
      return;
    }
    try {
      await deletarUsuario(id);
      setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => usuario.id !== id));
    } catch (error) {
      console.error('Erro ao tentar deletar usuário:', error);
    }
  };


  return (
    <section className='container-tabela  flex flex-col self-center w-[900px] m-6 p-6 gap-4 backdrop-blur-sm bg-gradient-to-bl from-slate-400/10 to-slate-500/30
    border-2 border-t-cyan-300/50 border-r-teal-300/50 border-b-green-300/50 border-l-emerald-300/50 
    backdrop-blur-sm box-shadow-lg shadow-emerald-400/20 shadow-emerald-500/30 box-shadow-xl rounded-xl'>

      <div className='flex justify-between'>
        <button className='botao-add' onClick={toggleModalUm}>
          Adicionar novo membro
        </button>

        <form id='form-searchbar' className='flex justify-evenly' onSubmit={fResultados}>
          <label htmlFor='id' className='flex flex-col-reverse px-6 gap-2' >
            ID
            <input id='id' type='radio'  value='id' checked={pesquisaTipo === 'id'} onChange={fPesquisaTipo} />
          </label>
          <label htmlFor='email' className='flex flex-col-reverse px-6 gap-2' >
            E-mail
            <input id='email' type='radio'  value='email' checked={pesquisaTipo === 'email'} onChange={fPesquisaTipo} />
          </label>
          <label htmlFor='nome' className='flex flex-col-reverse px-6 gap-2' >
            Nome
            <input id='nome' type='radio'  value='nome' checked={pesquisaTipo === 'nome'} onChange={fPesquisaTipo} />
          </label>

          <div className='searchbar'>
            <input id='pesquisar' type='text' placeholder='Pesquisar...' onChange={fPesquisa} />
            <button form='form-searchbar' type='submit'><FaSearch /></button>
          </div>
        </form>
      </div>


      <table className='text-left max-w-100% px-4 rounded-lg'>
        <thead >
          <tr className='t-header'>
            <th>ID</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>EMAIL</th>
            <th>SENHA</th>
            <th>CIDADE</th>
            <th>ESTADO</th>
            <th>...</th>
          </tr>
        </thead>

        <tbody>
        {usuarios.length > 0 && (
          usuarios.map(usuario => (
          <tr key={usuario.id} className='t-row'>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.idade}</td>
              <td>{usuario.email}</td>
              <td>{usuario.senha}</td>
              <td>{usuario.cidade}</td>
              <td>{usuario.estado}</td>
              <td>
                <button onClick={ () => fModalDois(usuario.id) }> <FaUserEdit /> </button>
              </td>
              <td>
                <button onClick={ () => fDelete(usuario.id) }> <FaTrash /> </button>
              </td>
            </tr>
          ))
        )}
        </tbody>
      </table>
    </section>
  )
}

export default Tabela;