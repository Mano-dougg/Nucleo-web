import { PrismaClient } from '@prisma/client';
import {Request, Response } from 'express';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient()

export default{


    async user (req: Request, res: Response){
        try {
          const {username, password} = req.body;
          const hashPassword = await bcrypt.hash(password,10);

          const user = await prisma.user.create({
            data: {
              username,
              password: hashPassword,
            },
          });
          console.log('Usuário cadastrado com sucesso:', user);
          res.status(200).json({ message: 'Usuário cadastrado com sucesso', user });
        } catch (error) {
          if ((error as any).code === 'P2002') {
            console.log('Nome de usuário já existe.');
            res.status(400).json({message: 'Nome de usuário já existe.' })
          } else {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(400).json({message: 'Erro ao cadastrar usuário:' })
          }
        }
      }

   
}