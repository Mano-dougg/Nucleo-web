import { PrismaClient } from '@prisma/client';
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';

configDotenv();

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(cors());
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
app.delete('/user/:name', async (req: Request, res: Response) => {
    const { name } = req.params;
  
    try {
      const result = await prisma.user.deleteMany({
        where: { name }
      });
  
      if (result.count > 0) {
        res.send({ message: 'Usuário(s) deletado(s) com sucesso', result });
      } else {
        res.status(404).send({ error: 'Usuário não encontrado' });
      }
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