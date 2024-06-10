import { Request, Response } from 'express';
import { prisma } from '../Database';

export default{
    async criarUsuario(req: Request, res: Response){
        try{
            const {nome, email, senha, idade, estado, cidade} = req.body;
            const usuarioExiste = await prisma.user.findUnique({where: {email}});

            if (usuarioExiste){
                return res.json({
                    message: 'Erro: E-mail já cadastrado'
                });
            }

            const user = await prisma.user.create({
                data: {
                    nome,
                    email,
                    idade,
                    senha,
                    cidade,
                    estado
                }
            })

            return res.json({
                message: 'Sucesso: Usuário cadastrado com sucesso',
                user
            });

        }catch(error){
            return res.status(500).json({ message: (error as Error).message });
        }
    },

    async usuarioId(req: Request, res: Response){
        try{
            const {id} = req.params;

            const user = await prisma.user.findUnique({where : {id: Number(id)}})

            if(!user){
                return res.json({
                    message: 'Error: Usuário não encontrado'
                });
            }

            return res.json({
                user
            });

        }catch(error){
            return res.status(500).json({ message: (error as Error).message });
        }
    },

    async usuarioEmail(req: Request, res: Response){
        try{
            const {email} = req.params;

            const user = await prisma.user.findUnique({where : {email: String(email)}})

            if(!user){
                return res.json({
                    message: 'Error: Usuário não encontrado'
                });
            }

            return res.json({
                user
            });

        }catch(error){
            return res.status(500).json({ message: (error as Error).message });
        }
    },

    async usuarioNome(req: Request, res: Response){
        try{
            const {nome} = req.params;

            const users = await prisma.user.findMany({ where: { nome: { contains: nome } } });

            if (users.length === 0) {
                return res.status(404).json({
                    message: 'Usuário não encontrado'
                });
            }

            return res.json({
                users: users.map(user => ({
                    id: user.id,
                    nome: user.nome,
                    email: user.email
                }))
            });

        }catch(error){
            return res.status(500).json({ message: (error as Error).message });
        }
    },

    async atualizarUsuario(req: Request, res: Response){
        try{
            const {id} = req.params;
            const {nome, email, senha, idade, estado, cidade} = req.body;

            const usuarioExiste = await prisma.user.findFirst({ where: { id: Number(id) } });

            if (!usuarioExiste){
                return res.json({
                    message: 'Erro: E-mail já cadastrado'
                });
            }

            const user = await prisma.user.update({
                where: {id: Number(req.params.id)},
                
                data: {
                    nome,
                    email,
                    idade,
                    senha,
                    cidade,
                    estado
                }
            });


            return res.json({
                message: 'Sucesso: Usuário atualizado com sucesso',
                user
            });

        }catch(error){
            return res.status(500).json({ message: (error as Error).message });
        }
    },

    async deleteUsuario (req: Request, res: Response){
        try{
            const {id} = req.params;

            const usuarioExiste = await prisma.user.findUnique({where : {id: Number(id)}})

            if (!usuarioExiste){
                return res.json({
                    message: ''
                });
            }

            const user = await prisma.user.delete({
                where: {id: Number(req.params.id)}
            });

            return res.json({
                message: 'Sucesso: Usuário deletado com sucesso',
                user
            });

        }catch(error){
            return res.status(500).json({ message: (error as Error).message });
        }
    }
    
}