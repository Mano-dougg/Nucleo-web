import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const prisma = new PrismaClient();

app.post('/createUser', async (req: Request, res: Response) => {
    try {
        const { nome, idade, email, senha, estado, cidade } = req.body;
        const userExists = await prisma.user.findUnique({ where: { email } });

        if (userExists) {
            return res.json({
                error: true,
                message: 'Erro: usuário já existe!'
            });
        }

        const user = await prisma.user.create({
            data: {
                nome,
                idade,
                senha,
                email,
                estado,
                cidade
            }
        });

        return res.json({
            error: false,
            message: 'Sucesso: usuário cadastrado!',
            user
        });
    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
});

app.get('/findUserById/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (!user) {
            return res.json({
                error: true,
                message: 'Erro: usuário não encontrado!',
            });
        }

        return res.json({
            error: false,
            user
        });
    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
});

app.get('/findUsersByName/:nome', async (req: Request, res: Response) => {
    try {
        const { nome } = req.params;

        const users = await prisma.user.findMany({ where: { nome } });

        if (users.length === 0) {
            return res.json({
                error: true,
                message: 'Erro: nenhum usuário encontrado com esse nome!',
            });
        }

        return res.json({
            error: false,
            users
        });
    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
});

app.put('/updateUserById', async (req: Request, res: Response) => {
    try {
        const { id, nome, idade, email, senha, estado, cidade } = req.body;

        const userExists = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (!userExists) {
            return res.json({
                error: true,
                message: 'Erro: usuário não encontrado!',
            });
        }

        const userWithSameEmail = await prisma.user.findUnique({ where: { email } });
        if (userWithSameEmail && userWithSameEmail.id !== Number(id)) {
            return res.json({
                error: true,
                message: 'Erro: este email já está em uso por outro usuário!',
            });
        }

        const user = await prisma.user.update({
            where: {
                id: Number(req.body.id) 
            },
            data: {
                nome,
                idade: parseInt(idade), 
                senha,
                email,
                estado,
                cidade
            }
        });

        return res.json({
            error: false,
            message: 'Sucesso, usuário atualizado!',
            user
        });
    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
});

app.delete('/deleteUserById/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const userExists = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (!userExists) {
            return res.json({
                error: true,
                message: 'Erro: usuário não encontrado!',
            });
        }

        const user = await prisma.user.delete({
            where: {
                id: Number(req.params.id) 
            },
        });

        return res.json({
            error: false,
            message: 'Sucesso, usuário deletado!',
            user
        });
    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
});



app.listen(port, () => {
    console.log(`Aplicativo de exemplo ouvindo na porta ${port}`);
});
