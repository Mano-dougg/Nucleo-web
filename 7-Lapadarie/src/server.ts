import { PrismaClient } from '@prisma/client';
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';

configDotenv();

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json());

// Criar pessoa (User) - POST
app.post('/user', async (req: Request, res: Response) => {
  const { name, totalpaes } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        totalpaes
      }
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar usuário', details: error });
  }
});

// Remover pessoa (User) - DELETE
app.delete('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    res.send({ message: 'Usuário deletado com sucesso', user });
  } catch (error) {
    res.status(400).send({ error: 'Erro ao deletar usuário', details: error });
  }
});

// Editar/Atualizar pessoa (User) - PUT
app.put('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, totalpaes } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        totalpaes
      }
    });
    res.send(user);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao atualizar usuário', details: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});