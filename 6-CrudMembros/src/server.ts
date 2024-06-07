import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const app = express()
const port = 3000

const prisma = new PrismaClient()

// 1 - rota de retornar todos os usuarios


// 2 - criar usuario POST
app.post('/user', async (req: Request, res: Response) => {
    const user = await prisma.user.create({
        data: {
            nome: 'Julio',
            idade: 20,
            senha: 'ahnes321',
            email: 'julio@gamil.com',
            estado: 'Bahia',
            cidade: 'Brumado'
        }
    }) 
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
