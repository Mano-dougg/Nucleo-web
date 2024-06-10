import { Router, Request, Response } from 'express';
import { prisma } from '../app';
import { request } from 'http';

const router = Router();


// CRUD BÁSICO

//Criar Usuário

router.post('/', async (req: Request, res: Response) => {
    const { name, paes } = req.body;

    try {
        const novoUsuario = await prisma.user.create({
            data: {
                name,
                paes
            }
        });

        res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            usuario: novoUsuario
        });
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});

//Deletar Usuário por Id

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const us = await prisma.user.findUnique({ where: { id: Number(id) } });
        if (us) {
            const deletado = await prisma.user.delete({ where: { id: Number(req.params.id) } })
             return res.json({
                message: 'Sucesso: Cpf Cancelado',
                deletado
            });
        } else {
            res.status(404).json({ error: 'Quer terminar com o que nem começou?' }); 
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' }); 
    }
});

//Atualizar usuário por Id

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;  
    const { name, paes} = req.body;


    try {
        const us = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (us) {
            const updates = await prisma.user.update({
                where: { id: Number(id) },  
                data: {
                    name, 
                    paes
                }
            });
            return res.json({
                message: 'Sucesso: Usuário Atualizado',
                updates
            }); 
        } else {
            res.status(404).json({ error:'Acho que você quer atualizar demais' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

//Mostra o Banco existente

router.get('/', async(req:Request, res:Response) => {

    try {
        const usuarios = await prisma.user.findMany()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json("Sem nada no banco")
    }

})



export default router;