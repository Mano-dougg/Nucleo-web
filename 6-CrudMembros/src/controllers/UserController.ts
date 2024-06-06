import { Request, Response } from "express";
import { prisma } from "../database";

export default {
    async createUser(request: Request, response: Response) {
        try {
            console.log("Request Body:", request.body);
            const { name, email, senha, idade, estado, cidade } = request.body;

            if (!email) {
                return response.status(400).json({
                    error: true,
                    message: "Erro: O campo 'email' é obrigatório!"
                });
            }

            const userExists = await prisma.user.findUnique({ where: { email } });

            if (userExists) {
                console.log('Usuário já existe:', userExists);
                return response.status(409).json({
                    error: true,
                    message: "Erro: usuário existente!"
                });
            }

            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    senha,
                    idade,
                    estado,
                    cidade
                }
            });

            console.log('Usuário criado:', user);

            return response.status(201).json({
                success: true,
                message: "Sucesso: Usuário cadastrado!",
                user
            });
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    }
};
