// api/get_favorites.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 // Importe o seu cliente Prisma aqui

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { userId } = req.body;

    try {
        const favorites = await prisma.favorite.findMany({
            where: {
                userId: parseInt(userId, 10),
            },
        });

        res.status(200).json({ favorite: favorites });
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Erro ao buscar favoritos.' });
    }
}
