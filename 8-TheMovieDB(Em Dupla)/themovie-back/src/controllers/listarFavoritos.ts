import { PrismaClient } from '@prisma/client';
import {Request, Response } from 'express';


const prisma = new PrismaClient()

export default{

    async favoritos (req: Request, res: Response){
    // const {userId} = req.body;
    const usuario = await prisma.favoritos.findMany();
    try{
      return res.json(usuario)
    }
    catch(error){
    res.status(500).json("Erro")
    }
  }

}