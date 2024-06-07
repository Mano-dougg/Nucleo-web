// import { PrismaClient } from '@prisma/client'
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';

configDotenv()

//configuração das bibliotecas do express que precisam rodar para construir o servidor
// const express = require('express')
const app = express()
const port = 3000

// const prisma = new PrismaClient()


// 1 - rota de retornar todos os usuários GET

// 2 - criar usuário POST
// app.post('/user', async (req: Request, res: Response)=>{
//     const user = await prisma.user.create ({
//         data:{
//             nome: 
//         }
//     })
// })

app.get('/teste', (req: Request, res: Response) => {
    console.log(req.params)
  res.send('Hello World!')
})

// inicia o servidor depois de definir as rotas
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
