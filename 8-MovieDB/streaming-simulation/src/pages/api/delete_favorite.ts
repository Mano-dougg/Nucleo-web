import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function delete_Favorite(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId, movieId } = req.body;

        const delFav = await prisma.favorite.deleteMany({
            where: { userId, movieId },
        });

        res.status(200).json(delFav);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao tentar remover um filme dos favoritos!" });
    }
}
