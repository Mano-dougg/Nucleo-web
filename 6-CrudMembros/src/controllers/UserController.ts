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
    },



    async getUserById(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const user = await prisma.user.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            if (!user) {
                return response.status(404).json({
                    message: "Erro: Usuário não encontrado!"
                });
            }

            return response.status(200).json({
                user
            });
        } catch (error: any) {
            console.error("Erro ao buscar usuário:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    },

   async getUserByEmail(request: Request, response: Response) {
    try {
        const { email } = request.params;

        if (!email) {
            return response.status(400).json({
                error: true,
                message: "Erro: Endereço de email não fornecido!"
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            return response.status(404).json({
                error: true,
                message: "Erro: Endereço de email não encontrado na base de dados!"
            });
        }

        return response.status(200).json({
            success: true,
            message: "Sucesso: Usuário encontrado!",
            user
        });
    } catch (error: any) {
        console.log("Erro ao buscar email:", error);
        return response.status(500).json({ error: true, message: error.message });
    }
}


};
