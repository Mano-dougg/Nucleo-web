import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"
configDotenv()
const app = express()
const port = 3000
const prisma = new PrismaClient()


app.post('/usuario',
  async (req: Request, res: Response) => {
    const usuario = await prisma.usuario.create({
      data: {
        nome:   'J. Soares',
        email:  'JSSacademica@proton.me',
        senha:  'Haha Eu Que Não Vou Botar Minha Senha Aqui',
        idade: 21,
        cidade: 'Salvador',
        estado: 'BA'
      }
    })
    res.send(usuario)
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
