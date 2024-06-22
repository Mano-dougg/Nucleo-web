import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import validationLogin from "../Entities/validationLogin";
import checkPassword from "../Entities/checkPassword";

const prisma = new PrismaClient()

export default {
    async loginUser(req: Request , res: Response) {
        try {
            const { email, senha } = req.body
                
            let user = await prisma.user.findUnique({ where: {email}});

            validationLogin(user, email, senha, res)
            checkPassword(senha, user, res)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

}
