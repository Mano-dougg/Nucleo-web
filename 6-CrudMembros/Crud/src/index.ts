import Express from "express"
import { PrismaClient } from '@prisma/client'
import rota from "./rotas/rota"

const app = Express()

const prisma = new PrismaClient()

 const Port = 5001

 app.use(Express.json())

 app.use('/', rota)


 app.listen(Port, () => {
    console.log(`Servidor rodando na porta ${Port}`)
 });

 export {prisma}
