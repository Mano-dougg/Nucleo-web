import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"
configDotenv()
const app = express()
const port = 3000
const prisma = new PrismaClient()


app.post('/usuario',
  async (req: Request, res: Response) => {
    const {nome, email, senha, idade, cidade, estado} = req.body
    try
    {
      const usuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha,
          idade,
          cidade,
          estado
        }
      })
      res.json(usuario)
    } catch (error) {
      res.status(400).json({ error : 'Usuario nao pode ser criado'})
    }
    
  }
)

app.get('/usuario/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(id) }
    });
    if (usuario) {
      res.json(usuario)
    } else {
      res.status(404).json({ error: 'Usuario nao pode ser encontrado' });
    }
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
