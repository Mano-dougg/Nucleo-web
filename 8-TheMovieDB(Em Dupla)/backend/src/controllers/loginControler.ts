import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { prisma } from "../database";
import bcrypt from 'bcrypt';

type JWTPayload = {
    id: number
}

export default {
    async login(request: Request, response: Response) {
        const { email, password } = request.body;

        // Verifica se o email e a senha foram fornecidos
        if (!email || !password) {
            return response.status(400).json({
                error: true,
                message: "Email e senha são obrigatórios."
            });
        }

        // Procura o usuário pelo email no banco de dados
        const user = await prisma.user.findUnique({ where: { email } });

        // Verifica se o usuário existe
        if (!user) {
            return response.status(401).json({
                error: true,
                message: "Email ou senha inválidos."
            });
        }

        // Compara a senha fornecida com a senha armazenada no banco de dados
        const verifyPassword = await bcrypt.compare(password, user.password);

        // Verifica se a senha está correta
        if (!verifyPassword) {
            return response.status(401).json({
                error: true,
                message: "Email ou senha inválidos."
            });
        }

        // Gera um token JWT para o usuário
        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '1h' });

        // Retorna o token no response
        return response.status(200).json({
            error: false,
            message: "Login realizado com sucesso.",
            token: token
        });
    },

    async getProfile(request: Request, response: Response) {
        try {
            const { authorization } = request.headers;
            if (!authorization) {
                return response.status(401).send('Não autorizado');
            }
            const token = authorization.split(' ')[1];

            const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JWTPayload;

            // Verificar se existe user no banco
            const user = await prisma.user.findUnique({ where: { id } });

            // Verifica se o usuário existe
            if (!user) {
                return response.status(401).json({
                    error: true,
                    message: "Usuário não encontrado."
                });
            }

            const { password, ...loggerUser } = user;

            return response.status(200).json(loggerUser);

            
        } catch (error) {
            console.error('Error fetching profile:', error);
            return response.status(500).send('Internal Server Error');
        }
    }
};
