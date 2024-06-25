import axios from 'axios';
import { Usuario } from '../types/types';

const URL_API = `http://localhost:5020`;

// Função para listar usuários
export const listarUsuarios = async (): Promise<Usuario[]> => {
  try {
    const response = await axios.get<Usuario[]>(`${URL_API}/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    throw error;
  }
};

// Função para pesquisar usuário por ID
export const pesquisarUsuarioPorId = async (id: number): Promise<Usuario> => {
  try {
    const response = await axios.get<Usuario>(`${URL_API}/id/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao pesquisar usuário por ID:', error);
    throw error;
  }
};

// Função para pesquisar usuário por email
export const pesquisarUsuarioPorEmail = async (email: string): Promise<Usuario> => {
  try {
    const response = await axios.get<Usuario>(`${URL_API}/email/${email}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao pesquisar usuário por email:', error);
    throw error;
  }
};

// Função para pesquisar usuário por nome
export const pesquisarUsuarioPorNome = async (nome: string): Promise<Usuario[]> => {
  try {
    const response = await axios.get<Usuario[]>(`${URL_API}/nome/${nome}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao pesquisar usuário por nome:', error);
    throw error;
  }
};

// Função para criar usuário
export const criarUsuario = async (usuario: Usuario): Promise<Usuario> => {
  try {
    const response = await axios.post<Usuario>(`${URL_API}/create`, usuario);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

// Função para atualizar usuário
export const atualizarUsuario = async (id: number, usuario: Partial<Usuario>): Promise<Usuario> => {
  try {
    const response = await axios.put<Usuario>(`${URL_API}/update/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};

// Função para deletar usuário
export const deletarUsuario = async (id: number ): Promise<Usuario> => {
  try {
    const response = await axios.delete<Usuario>(`${URL_API}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    throw error;
  }
};
