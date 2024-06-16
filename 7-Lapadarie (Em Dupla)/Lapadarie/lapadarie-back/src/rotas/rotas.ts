import { Router, Request, Response } from "express";
import { prisma } from "../index";


const rotas = Router()

//Rota de cadastro

rotas.post('/adicionar', async (request: Request, response: Response) => {

    const { name, quant_paes, valor } = request.body;

    try{
        const novocadastro = await prisma.fila_clientes.create({
            data: {
                name,
                quant_paes,
                valor
            }
        });

        response.json({
            fila_clientes: novocadastro
        });
    } catch (error) {
        response.status(500).json({ error: 'Erro' });
    }
});

rotas.get('/mostrartodos', async(request:Request, response:Response) => {

    const usuario = await prisma.fila_clientes.findMany();

    try{
            return response.json(usuario)
    }
    catch(error){
        response.status(500).json("Erro")
    }
});


rotas.delete('/deletar/:id', async (request: Request, response: Response) => {

    const {id}  = request.params;

    try {
            const deletar = await prisma.fila_clientes.delete({ where: { id: Number(id) } })

    } catch (error){
        response.json({ error: 'Erro' }); 
    }


});

rotas.put('/atualizarBanco', async (request: Request, response: Response) => {
  
    const { quant_fila, quant_total_paes, valor_total} = request.body;

    try {
        const atualizar = await prisma.caixa.update({
            where: { id: 1 },  
            data: {
                quant_fila,
                quant_total_paes,
                valor_total
            }
        });
        return response.json({
            message: 'Usuario atualizado',
            atualizar
        }); 
    } catch (error){
        response.json({ error: 'Erro' });
    }
});


rotas.post('/inicializarBanco', async (request: Request, response: Response) => {
    try {
        const existe = await prisma.caixa.findFirst();
        if (!existe) {
            await prisma.caixa.create({
                data: {
                },
            });
        }
    } catch (error) {
        response.json({ error: 'Erro' });
    }
});


rotas.get('/pegarBanco', async(request:Request, response:Response) => {

    const valores = await prisma.caixa.findFirst();

    try{
            return response.json(valores)
    }
    catch(error){
        response.status(500).json("Erro")
    }
});



export default rotas