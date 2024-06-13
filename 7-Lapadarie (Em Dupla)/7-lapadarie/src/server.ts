import { PrismaClient } from '@prisma/client';
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';

configDotenv()
const prisma = new PrismaClient()
const app = express();
const PORT = 3001;

app.get("/helloworld", (req: Request, res: Response) => {
  res.send("｢ʜȷxʃ ɵȷ xʃɤʃɞʃʭ｣ Esta não é a página de front-end. ;P")
})

app.post("/",
  async (req: Request, res: Response) => {
    const {nome, quantidade} = req.body
    const pedido = await prisma.pedido.create({
      data: {
        cliente: nome,
        quant: quantidade
      }
    })
    res.send(pedido)
  }
)

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})