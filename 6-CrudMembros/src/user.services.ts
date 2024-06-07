import { db } from "./db.server";

export type User = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  idade: number;
  estado: string;
  cidade: string;
};

export const listUsers = async (): Promise<User[]> => {
  return db.user.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      senha: true,
      idade: true,
      estado: true,
      cidade: true,
    },
  });
};

export const getUserById = async (id: number): Promise<User | null> => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};

export const createUser = async (
  user: Omit<User, "id">
): Promise<User> => {
  const { nome, email, senha, idade, estado, cidade } = user;
  return db.user.create({
    data: {
      nome,
      email,
      senha,
      idade,
      estado,
      cidade,
    },
    select: {
      id: true,
      nome: true,
      email: true,
      senha: true,
      idade: true,
      estado: true,
      cidade: true,
    },
  });
};

export const updateUserById = async (
  id: number,
  user: Omit<User, "id">
): Promise<User> => {
  const { nome, email, senha, idade, estado, cidade } = user;
  return db.user.update({
    where: {
      id,
    },
    data: {
      nome,
      email,
      senha,
      idade,
      estado,
      cidade,
    },
    select: {
      id: true,
      nome: true,
      email: true,
      senha: true,
      idade: true,
      estado: true,
      cidade: true,
    },
  });
};

export const deleteUserById = async (id: number): Promise<void> => {
  await db.user.delete({
    where: {
      id,
    },
  });
};
