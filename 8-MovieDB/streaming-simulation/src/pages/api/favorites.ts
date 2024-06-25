import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
export default async function get_Favorites(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId } = req.body;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { favorites: { include: { movie: true } } },
        });

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }

        res.status(200).json(user.favorites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao requisitar lista de favoritos!" });
    }
}
