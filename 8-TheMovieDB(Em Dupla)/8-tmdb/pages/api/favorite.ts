import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, movie } = req.body;

    try {
      const userFavorite = await prisma.favoritos.create({
        data: {
          user: { connect: { id: userId } },
          movie: {
            connectOrCreate: {
              where: { id: movie.id },
              create: {
                title: movie.title,
                synopsis: movie.synopsis,
              },
            },
          },
        },
      });
      res.status(200).json(userFavorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao favoritar o filme.' });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}