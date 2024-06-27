import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function new_Favorite(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId, movieId, movieData } = req.body; // movieData deve conter informações como title, overview, release_date, poster_path

        // Verificar se o usuário existe
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }

        // Verificar se o filme existe, caso contrário, criar
        let movie = await prisma.movie.findUnique({
            where: { id: movieId },
        });

        if (!movie) {
            movie = await prisma.movie.create({
                data: {
                    id: movieId,
                    title: movieData.title,
                    overview: movieData.overview,
                    release_date: new Date(movieData.release_date),
                    poster_path: movieData.poster_path,
                },
            });
        }

        // Criar novo favorito
        const newFav = await prisma.favorite.create({
            data: { userId, movieId },
        });

        res.status(200).json(newFav);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao tentar adicionar um filme aos favoritos!" });
    }
}
