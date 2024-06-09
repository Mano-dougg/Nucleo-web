import { Request, Response } from 'express';
import { prisma } from '../index'
import { error } from 'console';

export default {
    async createUser(request: Request, response: Response) {
        try{

            const {name, email, senha, idade, estado, cidade} = request.body;

            const userExist = await prisma.usuario.findUnique({ where: { email } });

            if(userExist){
                return response.json({
                    error: true,
                    message: 'Erro: usuario já existe'
                })
            }

            const user = await prisma.usuario.create({
                data: {
                  name,
                  email,
                  senha,
                  idade,
                  estado, 
                  cidade
                }
              })

            return response.json({
                error: false,
                message: 'Concluído: Usuário cadastrado',
                user
            })
        
        

        } catch(error){
            return response.json({message: "erro"})
        }
    }
}