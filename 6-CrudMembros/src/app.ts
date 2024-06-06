import express from 'express';
import { Request, Response } from 'express';
import { openDb } from './organiza';
import { configDotenv } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import usuar from './conexoes/usuar';
import router from './rotas/rt';

const app = express();
const prisma = new PrismaClient();
openDb();
configDotenv()

app.use(express.json());

/* app.get('/', (req: Request, res: Response) => {
    return res.status(200).json('Olá Mundo! Essa é a minha primeira rota :)');
});

app.post('/usuarios', async (req: Request, res: Response) => {
    const { nome, email, senha, idade, estado, cidade } = req.body;

    const usuarioExistente = await prisma.user.findUnique({where: { email }});

    if (usuarioExistente) {
        return res.status(400).json({ error: 'Usuário com este email já existe' });
    }
    
    try {
        const novoUsuario = await prisma.user.create({
            data: {
                nome,
                email,
                senha,
                idade,
                estado,
                cidade
            }
        });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});

app.get('/usuarios/:email',  async (req: Request, res: Response)=> {
    const {email} = req.params

    const us = await prisma.user.findUnique({where: { email }});

    try{
        if(us){
            return res.json(us)
        }
        else{
            res.status(400).json({ error: 'Usuário não encontrado' })
        }
    }
    catch (error) {
        res.status(400).json({ error: 'Erro para achar usuário' });
    }

})

app. */

app.use('/', router);

const PORT = 4005;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});

export {prisma}

