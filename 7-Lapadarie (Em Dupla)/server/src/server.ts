import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createOrder, updateOrder, finishOrder, deleteOrder, getAllOrders } from './services';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/order', async (req: Request, res: Response) => {
  const { customer_name, numberOfBreads } = req.body;
  try {
    const newOrder = await createOrder(customer_name, numberOfBreads);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.put('/orders/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { customer_name, numberOfBreads } = req.body;
  try {
    const updatedOrder = await updateOrder(parseInt(id), customer_name, numberOfBreads);
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.patch('/orders/:id/finish', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedOrder = await finishOrder(parseInt(id));
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.delete('/orders/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteOrder(parseInt(id));
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/orders', async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
