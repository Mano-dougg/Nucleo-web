import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient()

export default {
 
// POSTS
    async createUser(req: Request , res: Response) {
    try {
        const {nome, email, senha, idade, estado, cidade, } = req.body
        
        let user = await prisma.user.findUnique({ where: {email}});

        if(user) {
            return res.status(422).json({ error: "Já existe um usuario com este email" })
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

        return res.status(201).json(user)
    }
    catch (error) {}
},

// GETS
    async getUserId (req: Request, res: Response) {
        try {
            const {id} = req.params
            const user = await prisma.user.findUnique({where: {id: Number(id)}})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

    async getUserEmail (req: Request, res: Response) {
        try {
            const email = req.params.email
            const user = await prisma.user.findUnique({where: {email: email}})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }
            
            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

    async getUserNome (req: Request, res: Response) {
        try {
            const nome = req.params.nome
            const user = await prisma.user.findMany({where: {nome: String(nome)}})

            if (!user) {
                return res.status(200).status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

// PUTS
    async updateUserId (req: Request, res: Response) {
        try {
            const {id} = req.params
            const {email} = req.body
            let user = await prisma.user.findUnique({where: { id: Number(id) }})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            const userExist = await prisma.user.findMany({where: {email: email}})

            if (userExist) {
                return res.status(422).json({ error: "Já existe um usuario com este email" })
            }

            user = await prisma.user.update({
                where: { id: Number(id) },
                data: { email } 
            })

            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

// DELETES

    async deleteUserId (req: Request, res: Response) {
        try {
            const {id} = req.params
            let user = await prisma.user.findUnique({where: { id: Number(id) }})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            await prisma.user.delete({where: { id: Number(id) }})

            return res.status(200).json('Membro deletado')
        }

        catch {
            return res.json({ error })
        }
    },

}
