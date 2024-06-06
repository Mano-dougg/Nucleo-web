import { Request, Response } from 'express';
import { prisma } from '../app';


export default {
  async createUser(request: Request, response: Response) {
    try {
      const { nome, email,senha, idade, estado, cidade } = request.body;
      const userExist = await prisma.user.findUnique({ where: { email } });

      if (userExist) {
        return response.json({
          error: true,
          message: 'Erro: Usuário já existe!'
        });
      }

      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senha,
          idade,
          estado, 
          cidade
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso: Usuário cadastrado com sucesso!',
        user
      });

    } catch (error) {
      return response.json({ message: "erro" });
    }
  }
}; 