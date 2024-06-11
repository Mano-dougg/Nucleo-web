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

// Rota para retornar todos os pedidos
server.get('/orders', async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para criar um pedido
server.post('/order', async (req: Request, res: Response) => {
  const { customer_name, numberOfBreads } = req.body;
  const totalPrice = numberOfBreads * 0.5; // Assumindo que cada pão custa R$ 0,50

  try {
    const newOrder = await prisma.order.create({
      data: {
        customer_name,
        numberOfBreads,
        totalPrice,
        FulfilledOrder: false // Define como falso por padrão ao adicionar
      },
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para atualizar um pedido por ID
server.put('/order/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { customer_name, numberOfBreads } = req.body;
  const totalPrice = numberOfBreads * 0.5; // Assumindo que cada pão custa R$ 0,50

  try {
    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: {
        customer_name,
        numberOfBreads,
        totalPrice,
      },
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para finalizar um pedido por ID
server.patch('/order/:id/finish', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: {
        FulfilledOrder: true, // Define como verdadeiro ao finalizar
      },
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para deletar um pedido por ID
server.delete('/order/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.order.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
