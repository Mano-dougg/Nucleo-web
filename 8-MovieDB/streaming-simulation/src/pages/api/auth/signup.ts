import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, password, dateOfBirth, termsAccepted } = req.body;

    const dob = new Date(dateOfBirth);
    const age = new Date().getFullYear() - dob.getFullYear();

    if (age < 18) {
      return res.status(400).json({ message: 'Você precisa ter 18 anos ou mais para se cadastrar.' });
    }

    try {
      const hashedPassword = await hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          dateOfBirth: dob,
          termsAccepted
        }
      });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar o usuário.', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
