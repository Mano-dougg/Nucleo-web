import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"


configDotenv()

const app = express()
const port = 3000

const prisma = new PrismaClient()

app.use(express.json())

// Criar usuário (não permitir emails iguais)
app.post('/user', async (req: Request, res: Response) => {
    const { name, email, idade, estado, senha, cidade } = req.body
    
    const existingUser = await prisma.user.findUnique({
        where: { email}
    })

    if (existingUser) {
        return res.status(400).send({ error: 'Email já em uso' })
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            idade,
            estado,
            senha,
            cidade,
        }
    })
    res.status(201).send(user)
})

// Retornar usuário por ID
app.get('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params

    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    })

    if (!user) {
        return res.status(404).send({ error: 'Usuário não encontrado' })
    }

    res.send(user)
})

// Retornar usuário por email
app.get('/user/email/:email', async (req: Request, res: Response) => {
    const { email } = req.params

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return res.status(404).send({ error: 'Usuário não encontrado' })
    }
    

    res.send(user)
})

// Retornar usuários por nome
app.get('/users/name/:name', async (req: Request, res: Response) => {
    const { name } = req.params

    const users = await prisma.user.findMany({
        where: { name: { contains: name}} 
    })

    if (users.length === 0) {
        return res.status(404).send({ error: 'Nenhum usuário encontrado' })
    }

    res.send(users)
})

// Deletar usuário por ID
app.delete('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params

    const user = await prisma.user.delete({
        where: { id: parseInt(id) }
    })

    res.send({ message: 'Usuário deletado com sucesso', user })
})

// Atualizar usuário por ID (não permitir duplicidade de email)
app.put('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, idade, estado, senha, cidade } = req.body

    const existingUser = await prisma.user.findUnique({
        where: { email }
    })

    if (existingUser && existingUser.id !== parseInt(id)) {
        return res.status(400).send({ error: 'Email já em uso' })
    }

    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            name,
            email,
            idade,
            estado,
            senha,
            cidade
        }
    })

    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
