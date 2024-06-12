/* eslint-disable import/no-anonymous-default-export */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient()

export default {

// POSTS 
    async createUser(req: Request, res: Response) {
        try {
            const {name, paes} = req.body

            // VALIDATIONS
            if(!name) {return res.status(422).json ({ error: "Nome é obrigatório" })}
            if(!paes) {return res.status(422).json ({ error: "Número de pães é obrigatório" })} 

            const user = await prisma.user.create({
                data: {
                    name, 
                    paes,
                },
            })
            
            return res.status(201).json(user)
        }
        catch {
            return res.json({ error })
        }
    },

// GETS 
    async getUserName(req: Request, res: Response) {
        try {
            const {name} = req.body
            const user = await prisma.user.findMany({where: {name: name}})
            // VALIDATION
            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }
            
            return res.status(200).json(user)

        }
        catch {
            return res.json({ error })
        }
    },

// UPDATES

}
