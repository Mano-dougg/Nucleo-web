import express, { Response, Request, json } from 'express'
import { PrismaClient } from '@prisma/client'
import { configDotenv } from 'dotenv'
import cors from "cors"
// Configurações Gerais do Servidor - dotenv, prisma e express aqui bem definidos 
configDotenv()
const server = express()
const port = 7001
const prisma = new PrismaClient()
const customers = prisma.customer
const counters = prisma.counter
server.use(json())
server.use(cors())

type paess = { idCount: number | 0; peopleSum: number; breadSum: number; entry: number; } | null


server.post('/post_customer', async (req: Request, res: Response) => {
    const { nome, pao } = req.body;
    const money: number = (0.5 * Number(pao));

    const new_customer = await prisma.customer.create({
        data: {
            name: nome,
            breads: Number(pao),
            cash: money,
        },
    });

    let counter = await prisma.counter.findFirst({
        where: { idCount: 1 },
    });

    if (!counter) {
        counter = await prisma.counter.create({
            data: {
                breadSum: 0,
                entry: 0,
                idCount: 1,
                peopleSum: 0,
            },
        });
    }


    await prisma.counter.update({
        where: { idCount: 1 },
        data: {
            breadSum: counter.breadSum + Number(pao),
            entry: counter.entry + money,
        },
    });

    res.send(new_customer);
});

server.get('/clientes', async (req: Request, res: Response) => {
    const clientes = await prisma.customer.findMany({
        orderBy: {
            id: 'asc'
        }
    })
    res.status(200).json({ clientes: clientes })
})
server.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' })
        }
        const cliente = await prisma.customer.delete({ where: { id: id } })
        res.status(200).json(cliente)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})
//Terceira Rota - Rota de subir o Contador 
server.get('/increase_counter', async (_req: Request, res: Response) => {
    try {
        const customers = await prisma.counter.findFirst({
            where: { idCount: 1 }
        });


        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});
// Quarta Rota - Rota de descer o Contador 
server.put('/decrease_counter', async (req: Request, res: Response) => {
    const cicle = Number(await customers.count())
    const decrease_counter = await counters.update({ where: { idCount: 1 }, data: { peopleSum: cicle } })
    res.send(decrease_counter)
})

// Server Launch - listening on port 7001
server.listen(port, () => {
    console.log(`Servidor ON! Escutando na porta ${port}`)
})
