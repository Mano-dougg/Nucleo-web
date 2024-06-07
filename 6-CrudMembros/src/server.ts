import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';


dotenv.config();

const prisma = new PrismaClient();
const server: Application = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
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
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para criar um usuário (não permitir duplicatas de email)
server.post('/user', async (req: Request, res: Response) => {
  const { nome, email, senha, idade, estado, cidade } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const newUser = await prisma.user.create({ data: { nome, email, senha, idade, estado, cidade } });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para retornar usuário por ID
server.get('/:id', async (req: Request, res: Response) => {
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
});

// Rota para retornar usuário por email
server.get('/email/:email', async (req: Request, res: Response) => {
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
});

// Rota para retornar um ou mais usuários por nome
server.get('/nome/:nome', async (req: Request, res: Response) => {
  const { nome } = req.params;
  try {
    const users = await prisma.user.findMany({ where: { nome: nome } });
    if (!users.length) {
      return res.status(404).json({ error: 'Users not found' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para deletar usuário por ID
server.delete('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para atualizar usuário por ID (não permite duplicatas de email)
server.put('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, senha, idade, estado, cidade } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser && existingUser.id !== Number(id)) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { nome, email, senha, idade, estado, cidade },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
