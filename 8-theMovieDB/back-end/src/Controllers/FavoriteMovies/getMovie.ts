import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {
    async getMovie(req: Request , res: Response) {
        try {
            const {userId} = req.params
            
            let favoriteMovies = await prisma.favoriteMovies.findMany({ where: {userId: Number(userId)} });

            return res.status(201).json({ favoriteMovies })
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

}