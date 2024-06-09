import prisma from '../prisma/client';
import { User } from '@prisma/client';

export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
  return await prisma.user.create({ data: userData });
};

export const getUserById = async (id: number): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { id } });
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};

export const getUsersByName = async (name: string): Promise<User[]> => {
  return await prisma.user.findMany({ where: { name: { contains: name } } });
};

export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
  return await prisma.user.update({ where: { id }, data: userData });
};

export const deleteUser = async (id: number): Promise<User> => {
  return await prisma.user.delete({ where: { id } });
};
