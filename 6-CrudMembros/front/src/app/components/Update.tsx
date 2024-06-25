import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useModal } from '../contexts/ModalContexts';
import { atualizarUsuario } from '../services/api';

interface UpdateProps {
  className?: string;
  usuarioId: number; // Recebe o ID do usuário que será atualizado
}

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  idade: number;
  cidade: string;
  estado: string;
}

export default function Update({ className, usuarioId }: UpdateProps) {
  const { toggleModalDois } = useModal();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // Função para buscar os dados do usuário pelo ID
  const buscarUsuario = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:2050/id/${id}`);
      setUsuario(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  };

  // Efeito para buscar os dados do usuário ao montar o componente
  useEffect(() => {
    if (usuarioId) {
      buscarUsuario(usuarioId);
    }
  }, [usuarioId]);

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [idade, setIdade] = useState<number>(0);
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');

  // Preenche os campos com os dados atuais do usuário, se disponíveis
  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome);
      setEmail(usuario.email);
      setSenha(usuario.senha);
      setIdade(usuario.idade);
      setCidade(usuario.cidade);
      setEstado(usuario.estado);
    }
  }, [usuario]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const atualizar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (usuario) {
        const response = await atualizarUsuario(usuario.id, { email, senha, nome, idade, cidade, estado });
        alert('Dados atualizados com sucesso');
        toggleModalDois();
      }
    } catch (error) {
      console.error('Erro ao atualizar os dados: ', error);
    }
  };

  return (
    <section id="update" className={clsx('efeito-modal', className)}>
      <div className="container-modal">
        <h2 className="titulo-modal">Atualizar usuário</h2>
        
        <form className="modal-form" method="post">
          <label htmlFor="nome" className="form-label">
            Nome:
            <input id="nome" className="form-input" value={nome} onChange={handleInputChange(setNome)} />
          </label>

          <label htmlFor="idade" className="form-label col-span-2">
            Idade:
            <input id="idade" className="form-input" value={idade} onChange={handleInputChange(setIdade)} />
          </label>

          <label htmlFor="email" className="form-label col-span-7">
            E-mail:
            <input id="email" className="form-input" value={email} onChange={handleInputChange(setEmail)} />
          </label>

          <label htmlFor="senha" className="form-label col-span-7">
            Senha:
            <input id="senha" className="form-input" value={senha} onChange={handleInputChange(setSenha)} />
          </label>

          <label htmlFor="cidade" className="form-label col-span-4">
            Cidade:
            <input id="cidade" className="form-input" value={cidade} onChange={handleInputChange(setCidade)} />
          </label>
          
          <label htmlFor="estado" className="form-label col-span-3">
            Estado:
            <input id="estado" className="form-input" value={estado} onChange={handleInputChange(setEstado)} />
          </label>

          <button className="submit-button" onClick={atualizar}>Atualizar</button>
        </form>
      </div>
    </section>
  );
}
