import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { userId, movieId } = req.body;

    try {
      const userFavorite = await prisma.favoritos.deleteMany({
        where: {
          userId: userId,
          movieId: movieId,
        },
      });
      res.status(200).json(userFavorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao desfavoritar o filme.' });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}