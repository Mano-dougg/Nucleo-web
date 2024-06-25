import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default {
    async deleteMovie(req: Request , res: Response) {
        try {
            const {id} = req.body
            
            await prisma.favoriteMovies.delete({where: {id}});

            return res.status(201).json({ msg: "Filme removido dos favoritos" })
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" })
        }
    },

}