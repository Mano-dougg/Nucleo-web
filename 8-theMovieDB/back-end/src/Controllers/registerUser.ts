import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import validationRegister from "../Entities/validationRegister";

const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

export default {
    async registerUser(req: Request , res: Response) {
        try {
            const { nome, email, senha } = req.body
            
            let user = await prisma.user.findUnique({ where: {email}});

            validationRegister(user, nome, email, senha, res)

            // CREATE PASSWORD WITH HASH
            const salt = await bcrypt.genSalt(12)
            const senhaHash = await bcrypt.hash(senha, salt)

            // CREATE USER
            user = await prisma.user.create({
                data: {
                    nome, 
                    email, 
                    senha: senhaHash, 
                },
            })

            return res.status(201).json({ msg: "Usúario criado com sucesso"})
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

}