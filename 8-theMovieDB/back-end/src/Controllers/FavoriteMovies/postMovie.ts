import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {
    async postMovie(req: Request , res: Response) {
        try {
            const {id, userId} = req.body
            
            let favoriteMovies = await prisma.favoriteMovies.findUnique({ where: {id}});

            favoriteMovies = await prisma.favoriteMovies.create({
                data: {
                    id,
                    userId,
                },
            })

            return res.status(201).json({ msg: "Filme adicionado aos favoritos"})
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

}