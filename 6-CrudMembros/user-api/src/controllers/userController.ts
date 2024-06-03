import { Request, Response } from 'express';
import prisma from '../prisma';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

export const createUser = async (req: Request, res: Response) => {
    const { nome, email, senha, idade, estado, cidade } = req.body;
    
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      
      if (existingUser) {
        return res.status(400).json({ error: 'Email already in use' });
      }
      
      const hashedPassword = await bcrypt.hash(senha, 10);
  
      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senha: hashedPassword,
          idade,
          estado,
          cidade
        }
      });
      
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUsersByName = async (req: Request, res: Response) => {
    const { name } = req.params;
  
    try {
      const users = await prisma.user.findMany({
        where: {
          nome: {
            contains: name,
          }
        }
      });
  
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    await prisma.user.delete({ where: { id: Number(id) } });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha, idade, estado, cidade } = req.body;
  
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    
    if (existingUser && existingUser.id !== Number(id)) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { nome, email, senha, idade, estado, cidade }
    });
    
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid password' });
      }

      const token = generateToken(user.id);

      res.json({ token });
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
};
  
  export const logoutUser = (req: Request, res: Response) => {
    res.json({ message: 'Logged out' });
  };