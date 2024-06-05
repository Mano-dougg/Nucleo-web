import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient()

export default {
    
    async createUser(req: Request , res: Response) {
    try {
        const {nome, email, senha, idade, estado, cidade, } = req.body
        
        let user = await prisma.user.findUnique({ where: {email}});

        if(user) {
            return res.json({ error: "ja existe um usuario com este email"})
        }

        user = await prisma.user.create({
            data: {
                nome, 
                email, 
                senha, 
                idade, 
                estado, 
                cidade,
            },
        })

        return res.json(user)
    }
    catch (error) {}
},

    async getUser(req: Request, res: Response) {
        try {
            const {id} = req.params
            const user = await prisma.user.findUnique({where: {id: Number(id)}})

            if (!user) {
                return res.json({ error: "Não foi possível encontrar esse membro"})
            }
            
            return res.json(user)
        }

        catch {
            return res.json({ error })
        }
    },



}
