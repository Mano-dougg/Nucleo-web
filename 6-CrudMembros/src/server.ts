import express, { Request, Response } from 'express';
import { config as configDotenv } from 'dotenv';
import { PrismaClient } from '@prisma/client';

configDotenv();

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json()); // Middleware para parsing do JSON

// Rota para retornar todos os usuários
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Rota para criar usuário
app.post('/user', async (req: Request, res: Response) => {
  const { name, email, idade, senha, estado, cidade } = req.body;

  if (!name || !email || !idade || !senha || !estado || !cidade) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        idade,
        senha,
        estado,
        cidade,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Rota para retornar usuário por ID
app.get('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) }
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Rota para retornar usuário por email
app.get('/user/email/:email', async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Rota para retornar usuários por nome
app.get('/users/name/:name', async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name,
        //   mode: 'insensitive'
        } 
      }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Rota para deletar usuário por ID
app.delete('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.delete({
      where: { id: Number(id) }
    });
    res.json({ message: 'User deleted', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Rota para atualizar usuário por ID
app.put('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, email, idade, senha, estado, cidade } = req.body;

  if (!name || !email || !idade || !senha || !estado || !cidade) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser && existingUser.id !== Number(id)) {
      return res.status(400).json({ error: 'Another user with this email already exists' });
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        idade,
        senha,
        estado,
        cidade,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
