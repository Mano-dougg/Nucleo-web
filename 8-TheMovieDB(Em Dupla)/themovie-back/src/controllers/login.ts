import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = 'chave_super_secreta_aqui';

export default {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) {
        return res.status(401).json({ error: 'Nome de usuário ou senha incorretos.' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Nome de usuário ou senha incorretos.' });
      }

      const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({message: 'Login realizado com sucesso!',token });

    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      res.status(500).json({ error: 'Erro ao autenticar usuário' });
    }
  },
};