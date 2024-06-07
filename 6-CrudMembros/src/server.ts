import { PrismaClient } from '@prisma/client';
import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define a custom interface extending the Request interface
interface AuthenticatedRequest extends Request {
    user?: any; // Define the 'user' property
}

const app = express();
const port = 3000;

app.use(express.json());

const prisma = new PrismaClient();
const jwtSecret = 'your_jwt_secret'; // Replace with your secret key

// Middleware to authenticate JWT token
const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Route to register a new user
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

        const hashedPassword = await bcrypt.hash(senha, 10);

        const user = await prisma.user.create({
            data: {
                nome,
                idade,
                senha: hashedPassword,
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

// Route to login a user
app.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, senha } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(senha, user.senha))) {
            return res.json({
                error: true,
                message: 'Erro: email ou senha incorretos!'
            });
        }

        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

        return res.json({
            error: false,
            message: 'Sucesso: login realizado!',
            token
        });
    } catch (error: unknown) {
        return res.json({ message: (error as Error).message });
    }
});

// Route to logout a user (client-side token management)
// In practice, the client can simply discard the token
app.post('/logout', (req: Request, res: Response) => {
    // The client should handle token invalidation
    return res.json({
        error: false,
        message: 'Sucesso: logout realizado!'
    });
});

// Protected routes
app.get('/findUserById/:id', authenticateToken, async (req: Request, res: Response) => {
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

app.get('/findUsersByName/:nome', authenticateToken, async (req: Request, res: Response) => {
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

app.put('/updateUserById', authenticateToken, async (req: Request, res: Response) => {
    try {
        const { id, nome, idade, email, senha, estado, cidade } = req.body;

        const userExists = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (!userExists) {
            return res.json({
                error: true,
                message: 'Erro: usuário não encontrado!',
            });
        }

        // If the email is being updated
        if (email !== userExists.email) {
            const userWithSameEmail = await prisma.user.findUnique({ where: { email } });
            if (userWithSameEmail) {
                return res.json({
                    error: true,
                    message: 'Erro: este email já está em uso por outro usuário!',
                });
            }
        }

        const hashedPassword = senha ? await bcrypt.hash(senha, 10) : userExists.senha;

        const user = await prisma.user.update({
            where: {
                id: Number(req.body.id)
            },
            data: {
                nome,
                idade: parseInt(idade),
                senha: hashedPassword,
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


app.delete('/deleteUserById/:id', authenticateToken, async (req: Request, res: Response) => {
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
