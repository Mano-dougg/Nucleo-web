// src/middleware/authenticateToken.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Prisma, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = 'seu_segredo_aqui';

interface AuthenticatedRequest extends Request {
  user?: User | null; // Use diretamente o tipo User do Prisma
}

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); 
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { username: decoded.username },
    });

    if (!user) {
      return res.sendStatus(401); 
    }

   
    req.user = user;
    next();
  } catch (error) {
    console.error('Erro ao verificar token JWT:', error);
    return res.sendStatus(403); // Token inválido ou expirado
  }
}
