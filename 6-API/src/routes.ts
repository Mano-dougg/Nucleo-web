import { Router } from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const router = Router()
const prisma = new PrismaClient()

router.get('/', (req, res) => {
    res.send('funciona')
})

router.post("/criar_membro", async (req: Request , res: Response) => {
   
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
});

export { router }