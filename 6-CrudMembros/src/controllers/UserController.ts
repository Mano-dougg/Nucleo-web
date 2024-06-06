import { Request, Response } from "express"
import { prisma } from "../database";
import { error } from "console";

export default {
    async createUser(request: Request, response: Response) {
        try {
            const { id, name, email, senha, idade, estado, cidade } = request.body;
            const userExists = await prisma.user.findUnique({ where: { email, id } });


            if (userExists) {
                return response.json({
                    error: true,
                    message: "erro: usuario existente! "
                });
            }


            const user = await prisma.user.create({
                data:{
                    name,email,senha,idade,estado,cidade
                }
            })



            return response.json({
                error: false,
                message: "Sucesso: usuario Cadastrado ! ",
                user
            });
        } catch (error) {
            return response.json({ message: error.message });
        }
    }
}