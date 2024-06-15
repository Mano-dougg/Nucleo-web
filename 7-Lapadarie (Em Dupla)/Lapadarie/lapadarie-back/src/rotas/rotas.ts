import express, { Router, Request, Response } from "express";
import { prisma } from "../index";


const rotas = express.Router()

// Rota de cadastro

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
            message: 'Usuario cadastrado',
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

module.exports = rotas;

export default rotas