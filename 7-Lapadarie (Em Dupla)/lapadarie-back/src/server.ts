import express, {Response, Request, json} from 'express'
import {PrismaClient} from '@prisma/client'
import {configDotenv} from 'dotenv'
// Configurações Gerais do Servidor - dotenv, prisma e express aqui bem definidos 
configDotenv()
const server = express()
const port = 7001
const prisma = new PrismaClient()
const customers = prisma.customer 
const counters = prisma.counter 
server.use(json())


// Primeira Rota - Post dos customers 
server.post('/post_customer', async (req:Request,res:Response) => {
    const nome:string = String(req.query.name) 
    const pao:number = Number(req.query.bread)
    const money:number = (0.5 * pao)
    const new_customer = await customers.create({
        data: {
            name:nome,
            breads:pao,
            cash:money
        }
    })
    res.send(new_customer)
})
// Segunda Rota - Deletar um usuário por id 
server.delete('/delete_customer', async (req:Request,res:Response)=> {
    const id_for_deletion:number = Number(req.query.id)
    const delete_customer = await customers.delete({where:{id:id_for_deletion}})
    res.send(delete_customer)
})
//Terceira Rota - Rota de subir o Contador 
server.put('/increase_counter', async (req:Request, res:Response) => {
    const total = Number(await customers.count())
    const bread = (await customers.count({select:{breads:true}})).breads
    let mobile = (await customers.count({select:{cash:true}})).cash

    const increase_counter = await counters.update({
        where:{idCount:1}, 
        data:{
            peopleSum:total,
            breadSum:bread,
            entry:Number(mobile),
    }})
    res.send(increase_counter)
})
// Quarta Rota - Rota de descer o Contador 
server.put('/decrease_counter' , async (req:Request,res:Response) => {
    const cicle = Number(await customers.count())
    const decrease_counter = await counters.update({where:{idCount:1}, data:{peopleSum:cicle}})
    res.send(decrease_counter)
})

// Server Launch - listening on port 7001
server.listen(port, () => {
    console.log(`Servidor ON! Escutando na porta ${port}`)
})
