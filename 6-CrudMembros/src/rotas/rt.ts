import { Router, Request, Response } from 'express';
import { prisma } from '../app';
import { request } from 'http';

const router = Router();


// CRUD BÁSICO

//Criar Usuário


/* router.post('/usuarios', async (req: Request, res: Response) => {
    const { nome, email, senha, idade, estado, cidade } = req.body;

    const usuarioExistente = await prisma.user.findUnique({where: { email }});

    if (usuarioExistente) {
        return res.status(400).json({ error: 'Usuário com este email já existe' });
    }
    
    try {
        const novoUsuario = await prisma.user.create({
            data: {
                nome,
                email,
                senha,
                idade,
                estado,
                cidade
            }
        });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
}); */

router.post('/usuarios', async (req: Request, res: Response) => {
    const { nome, email, senha, idade, estado, cidade } = req.body;

    const usuarioExistente = await prisma.user.findUnique({ where: { email } });

    if (usuarioExistente) {
        return res.status(400).json({ error: 'Usuário com este email já existe' });
    }
    
    try {
        const novoUsuario = await prisma.user.create({
            data: {
                nome,
                email,
                senha,
                idade,
                estado,
                cidade
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

//Buscar Usuário por email

router.get('/usuarios/emails/:email',  async (req: Request, res: Response)=> {
    const { email } = req.params;

    const us = await prisma.user.findUnique({where: { email }});

    try {
        if (us) {
            return res.json(us);
        } else {
            res.status(400).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Erro para achar usuário' });
    }
});

//Buscar Usuário por Id

router.get('/usuarios/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const us = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (us) {
            return res.json(us);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' }); 
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' }); 
    }
});

//Deletar Usuário por Id

router.delete('/usuarios/:id', async (req: Request, res: Response) => {
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

router.put('/usuarios/:id', async (req: Request, res: Response) => {
    const { id } = req.params;  
    const { nome, email, senha, idade, estado, cidade } = req.body;


    try {
        const us = await prisma.user.findUnique({ where: { id: Number(id) } });

        if (us) {
            if(email){
                const usuarioExistente = await prisma.user.findUnique({where: { email }})
                if (usuarioExistente && usuarioExistente.id !== Number(id)) {
                    return res.json({ error: 'Parado aí, esse email já existe' });
                }
            }
            if (email && email === us.email) {
                return res.status(400).json({ error: 'Amigo, que tipo de atualização coloca o mesmo email?' });
            }
            const updates = await prisma.user.update({
                where: { id: Number(id) },  
                data: {
                    nome,
                    email,
                    senha,
                    idade,
                    estado,
                    cidade
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

// Buscas Específicas

//Buscar Usuários por nomes

router.get('/usuarios/salvos/:nome', async(req:Request, res:Response) => {
    const {nome} = req.params;
    const us = await prisma.user.findMany({where: { nome }});
    try{
        if (us.length > 0){
            return res.json(us)
        }
        else{
            return res.status(404).json("Nada salvo aqui")
        }
    }
    catch(error){
        res.status(500).json("Erro ao procurar nome")
    }
});


//Mostra o Banco existente

router.get('/banco', async(req:Request, res:Response) => {

    try {
        const usuarios = await prisma.user.findMany()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json("Sem nada no banco")
    }

})



export default router;