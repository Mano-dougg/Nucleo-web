export type Usuario = {
  id?: number;
  email: string;
  senha: string;
  nome: string;
  idade: number;
  cidade: string;
  estado: string;
}

export type Pesquisa = number | string;

export type Filtro = [] | [{}];

export const InputID = /^\d+$/;

export const InputEmail = /@/;

