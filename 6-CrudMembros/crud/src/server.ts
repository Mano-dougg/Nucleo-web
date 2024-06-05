import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"
configDotenv()
const app = express()
const port = 3000
const prisma = new PrismaClient()
app.use(express.json())


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
    })
    if (usuario) {
      res.json(usuario)
    } else {
      res.status(404).json({ error: 'Usuario nao pode ser encontrado' })
    }
  }
)

app.get('/usuario/:email',
  async (req: Request, res: Response) => {
    const { email } = req.params
    const usuario = await prisma.usuario.findUnique({
      where: { email: email }
    })
    if (usuario) {
      res.json(usuario)
    } else {
      res.status(404).json({ error: 'Usuario nao pode ser encontrado' })
    }
  }
)

app.get('/usuario/nome/:nome',
  async (req: Request, res: Response) => {
    const { nome } = req.params
    try {
      const usuarios = await prisma.usuario.findMany({
        where: { nome: nome }
      })
      if (usuarios.length > 0) {res.json(usuarios)}
      else {res.status(404).json({error: 'Usuarios nao encontrados'})}
    } catch (error) {
      res.status(500).json({ error: 'Erro ao procurar usuarios' })
    }
  }
)

app.delete('/usuario/deletar/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const usuario = await prisma.usuario.delete({
        where: { id: Number(id) }
      })
        res.json({message: 'Usuario deletado'})
    } catch (error) {
      res.status(400).json({ error: 'Usuario nao pode ser deletado' })
    }
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
