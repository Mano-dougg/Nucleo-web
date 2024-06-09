import { Router, Request, Response } from "express";
import { prisma } from "../index";

const rota = Router();

rota.post('/usuario/adc', async (request: Request, response: Response) => {
    const { name, email, senha, idade, estado, cidade } = request.body;

    const existe = await prisma.usuario.findUnique({ where: {email} });

    if (existe) {
        return response.json({ error: 'Email já cadastrado' });
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

        response.json({
            message: 'Usuario cadastrado',
            usuario: novocadastro
        });
    } catch (error) {
        response.status(500).json({ error: 'Erro' });
    }
});



rota.get('/usuario/buscaid', async (request: Request, response: Response) => {
    const { id } = request.body;

    try {
        const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } });

        if (usuario) {
            return response.json(usuario);
        } else {
            response.json({ error: 'Id não encontrado'}); 
        }
    } catch (error) {
        response.status(500).json({ error: 'Erro' }); 
    }
});

rota.put('/usuario/atualizaid', async (request: Request, response: Response) => {
    const { id } = request.body;  
    const { name, email, senha, idade, estado, cidade } = request.body;


    try {
        const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } });

        if (usuario) {
            
            const existe = await prisma.usuario.findUnique({where: { email }})
            const another = await prisma.usuario.findUnique({where: { id: Number(id) }})

            if(existe?.email == another?.email){
                    return response.json({ error: 'Email já cadastrado' });
            }
            if (email === usuario.email) {
                return response.json({ error: 'Email não atualizado' });
            }
            const atualizado = await prisma.usuario.update({
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
                atualizado
            }); 
        } else {
            response.json({ error:'Id não encontrado' });
        }
    } catch (error) {
        response.json({ error: 'Erro' });
    }
});


rota.delete('/usuario/deletar', async (request: Request, response: Response) => {
    const {id}  = request.body;

    try {
        const usuario = await prisma.usuario.findUnique({ where: { id: Number(id) } });
        
        if (usuario) {
            const deletar = await prisma.usuario.delete({ where: { id: Number(id) } })

             return response.json({
                message: 'Usuario deletado',
                deletar
            });
        } else {
            response.json({ error: 'Id não encontrado' }); 
        }
    } catch (error) {
        response.json({ error: 'Erro' }); 
    }
});


rota.get('/usuario/buscaemail',  async (request: Request, response: Response)=> {
    const { email } = request.body;

    const usuario = await prisma.usuario.findUnique({where: { email }});

    try {
        if (usuario) {
            return response.json(usuario);
        } else {
            response.json({ error: 'Usuario não encontrado' });
        }
    } catch (error) {
        response.status(500).json({ error: 'Erro' });
    }
});



rota.get('/usuario/buscanome', async(request:Request, response:Response) => {
    const {name} = request.body;

    const usuario = await prisma.usuario.findMany({where: { name }});

    try{
        if (usuario){
            return response.json(usuario)
        }
        else{
            return response.json("Nome não encontrado")
        }
    }
    catch(error){
        response.status(500).json("Erro")
    }
});


// rota.get('/usuario/mostrartodos', async(request:Request, response:Response) => {

//     const usuario = await prisma.usuario;

//     try{
//             return response.json(usuario)
//     }
//     catch(error){
//         response.status(500).json("Erro")
//     }
// });



export default rota