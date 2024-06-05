import { PrismaClient } from '@prisma/client';
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';

configDotenv();

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

// Criar usuário (não permitir duplicidade de email)
app.post('/user', async (req: Request, res: Response) => {
    const { name, email, idade, estado, cidade} = req.body;

    // Verificar se já existe um usuário com o email fornecido
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return res.status(400).json({ error: 'Usuário com este email já existe' });
    }

    // Criar novo usuário
    const user = await prisma.user.create({
        data: {
            name,
            email,
            idade,
            estado,
            cidade
        }
    });

    res.status(201).json(user);
});

// Retornar usuário por ID
app.get('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
        where: { id: Number(id) }
    });

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(user);
});

// Retornar usuário por email
app.get('/user/email/:email', async (req: Request, res: Response) => {
    const { email } = req.params;

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(user);
});

// Retornar um ou mais usuários por nome
app.get('/users/name/:name', async (req: Request, res: Response) => {
    const { name } = req.params;

    const users = await prisma.user.findMany({
        where: { name: { contains: name } }
    });

    if (users.length === 0) {
        return res.status(404).json({ error: 'Nenhum usuário encontrado' });
    }

    res.json(users);
});

// Deletar usuário por ID
app.delete('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
        where: { id: Number(id) }
    });

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await prisma.user.delete({
        where: { id: Number(id) }
    });

    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
