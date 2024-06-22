import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

export default {
    async loginUser(req: Request , res: Response) {
        try {
            const {nome, email, senha, idade, estado, cidade, } = req.body
                
            let user = await prisma.user.findUnique({ where: {email}});

            // VALIDATIONS
            if(!user)  {return res.status(404).json({ msg: "Email ou senha inválidos" })}

            if(!email) {return res.status(422).json({ msg: "Email é obrigatório" })} 

            if(!senha) {return res.status(422).json({ msg: "Senha é obrigatória" })}

            // CHECK IF PASSWORD MATCH
            const checkSenha = await bcrypt.compare(senha, user.senha)

            if (!checkSenha) {return res.status(422).json({ error: "Email ou senha inválidos" })}
                
            return res.status(201).json({ msg: "Autenticação realizada com sucesso" })
        }

        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

}
