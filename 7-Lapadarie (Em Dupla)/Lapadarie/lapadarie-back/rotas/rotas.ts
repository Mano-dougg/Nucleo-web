import { Router, Request, Response } from "express";
// import { prisma } from "../src/index";


const rotas = Router()

//Rota de teste
rotas.post('/', async (request: Request, response: Response) => {

    const valor = request.body;

    try{
        return response.json({valor})
    } catch (error) {
        response.status(500).json({ error: 'Erro' });
    }
});



export default rotas