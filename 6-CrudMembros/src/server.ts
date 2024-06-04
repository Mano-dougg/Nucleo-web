import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"


configDotenv()

const app = express()
const port = 3000

const prisma = new PrismaClient()

//criar usuario Post
app.post('/user', async(req: Request, res: Response) =>{
    const user = await prisma.user.create({
        data: {
            name: 'Samuel' ,
            email: 'samuel@ufba',
            idade: 19,
            estado: 'bahia', 
            senha: '1234sadxc',
            cidade: 'salvador'
        }
    })
    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
