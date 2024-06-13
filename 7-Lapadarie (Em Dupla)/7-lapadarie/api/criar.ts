import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {nome, quantidade} = req.body
    try {
        await prisma.pedido.create({
            data: {
                cliente: nome,
                quant: quantidade
            }
        })
        res.status(200).json({message: "Pedido gerado com sucesso"})
    } catch (error) {
        res.status(400).json({error: "Erro ao gerar o pedido"})
    }
}