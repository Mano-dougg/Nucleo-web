import { Router, Request, Response } from "express";
import { prisma } from "../index";

const rota = Router();

rota.post('/usuario/adc', async (request: Request, response: Response) => {
    const { name, email, senha, idade, estado, cidade } = request.body;

    const existe = await prisma.usuario.findUnique({ where: {email} });

    if (existe) {
        return response.status(400).json({ error: 'Usuário com este email já existe' });
    }

    try {
        const novocadastro = await prisma.usuario.create({
            data: {
                name,
                email,
                senha,
                idade,
                estado,
                cidade
            }
        });

        response.status(201).json({
            message: 'Usuário cadastrado',
            usuario: novocadastro
        });
    } catch (error) {
        response.status(400).json({ error: 'Erro' });
    }
});



rota.get('/usuario/:id', async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } });

        if (usuario) {
            return response.json(usuario);
        } else {
            response.status(404).json({ error: 'Não encontrado' }); 
        }
    } catch (error) {
        response.status(500).json({ error: 'Erro' }); 
    }
});

rota.put('/usuario/:id', async (request: Request, response: Response) => {
    const { id } = request.params;  
    const { name, email, senha, idade, estado, cidade } = request.body;


    try {
        const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } });

        if (usuario) {

            if(email){
                const usuarioExistente = await prisma.usuario.findUnique({where: { email }})
                if (usuarioExistente && usuarioExistente.id !== Number(id)) {
                    return response.json({ error: 'Email já cadastrado' });
                }
            }
            if (email && email === usuario.email) {
                return response.status(400).json({ error: 'Email não atualizado' });
            }
            const updates = await prisma.usuario.update({
                where: { id: Number(id) },  
                data: {
                    name,
                    email,
                    senha,
                    idade,
                    estado,
                    cidade
                }
            });
            return response.json({
                message: 'Usuario atualizado',
                updates
            }); 
        } else {
            response.status(404).json({ error:'Id não encontrado' });
        }
    } catch (error) {
        response.status(500).json({ error: 'Erro' });
    }
});


rota.delete('/usuario/:id', async (request: Request, response: Response) => {
    const {id}  = request.params;

    try {
        const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } });
        
        if (usuario) {
            const deletar = await prisma.usuario.delete({ where: { id: Number(id) } })

             return response.json({
                message: 'Usuario deletado',
                deletar
            });
        } else {
            response.status(404).json({ error: 'Id não encontrado' }); 
        }
    } catch (error) {
        response.status(500).json({ error: 'Erro' }); 
    }
});


rota.get('/usuario/email/:email',  async (request: Request, response: Response)=> {
    const { email } = request.params;

    const usuario = await prisma.usuario.findUnique({where: { email }});

    try {
        if (usuario) {
            return response.json(usuario);
        } else {
            response.status(400).json({ error: 'Usuario não encontrado' });
        }
    } catch (error) {
        response.status(400).json({ error: 'Erro' });
    }
});



rota.get('/usuario/name/:name', async(request:Request, response:Response) => {
    const {name} = request.params;

    const usuario = await prisma.usuario.findMany({where: { name }});

    try{
        if (usuario){
            return response.json(usuario)
        }
        else{
            return response.status(404).json("Nome não encontrado")
        }
    }
    catch(error){
        response.status(500).json("Erro")
    }
});


export default rota