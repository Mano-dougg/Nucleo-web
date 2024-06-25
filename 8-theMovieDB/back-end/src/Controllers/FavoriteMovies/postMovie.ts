import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {
    async postMovie(req: Request , res: Response) {
        try {
            const {id} = req.body
            const {userId} = req.params
            
            // Convert userId to number
            const numericUserId = parseInt(userId, 10);
            if (isNaN(numericUserId)) {
                return res.status(400).json({ msg: "Invalid userId" });
            }
            
            let favoriteMovies = await prisma.favoriteMovies.findUnique({ where: {id}});

            favoriteMovies = await prisma.favoriteMovies.create({
                data: {
                    id,
                    userId: numericUserId,
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