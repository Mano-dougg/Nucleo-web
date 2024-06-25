import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const express = require('express');
const rapp = express();
const prisma = new PrismaClient();

interface DBData {
  id: number;
  nome: string;
  paes: number;
  dinheiros: number;
}

export default {
    
    // Rota para atualizar o valor do pão
    async alterarValor(req: Request, res: Response) {
      const novoValor = req.body;
      try {
        await prisma.valorPao.update({
          where: { id: 1 },
          data: { valor: novoValor }
        });
        res.json({ message: 'Preço do pão atualizado com sucesso!' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o preço do pão!' });
      }
    },
  }