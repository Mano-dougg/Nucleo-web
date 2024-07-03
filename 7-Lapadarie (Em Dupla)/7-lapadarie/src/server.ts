import { PrismaClient } from '@prisma/client';
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';

configDotenv()
const prisma = new PrismaClient()
const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json())

app.get("/hello", (req: Request, res: Response) => {
  res.send("｢ʜȷxʃ ɵȷ xʃɤʃɞʃʭ｣ Esta não é a página de front-end. ;P")
})

app.post("/criar",
  async (req: Request, res: Response) => {
    const {cliente, quant} = req.body
    console.log("Peguei o body")
    if (!cliente || !quant) {
      if (!cliente) {
        console.log("NOT cliente")
      }
      if (!quant) {
        console.log("NOT quant")
      }
      return res.status(400).json({ error: "Faltou cliente ou quant no body" })
    }
    console.log("Tem os dois")
    await prisma.pedido.create({
      data: {
        cliente: cliente,
        quant: parseInt(quant)
      }
    })
    res.status(200).json({message: "Pedido gerado com sucesso"})
  }
)

app.delete("/deletar/:id",
  async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      await prisma.pedido.delete({
        where: { id: Number(id) }
      })
        res.status(200).json({message: 'Pessoa removida da fila'})
    } catch (error) {
      res.status(400).json({ error: 'Pedido não pôde ser removido' })
    }
  }
)

app.get("/pedidos",
  async (req: Request, res: Response) => {
    console.log("tentando pegar todos os pedidos")
    try {
      const pedidos = await prisma.pedido.findMany()
      return res.status(200).json(pedidos)
    } catch (error) {
      console.error("Erro ao pegar a lista de pedidos:", error)
      res.status(500).json({error: "Erro ao pegar a lista de pedidos"})
    }
  }
)

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})