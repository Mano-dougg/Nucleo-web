import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ClienteData {
  nome: string;
  paes: number;
}


export default {
  async criarCliente(req: Request, res: Response) {
    try {
      const { nome, paes }: ClienteData = req.body;
      const valorPao = 
        await prisma.valorPao.findUnique({ where: { id: 1 } }) 
        || 
        {valor: 0.5};

      const valorCompra = paes * valorPao.valor;
      const cliente = await prisma.clientes.create({
        data: {
          nome,
          paes,
          valorCompra,
        },
      });

      console.log('Novo cliente adicionado à fila:', cliente);
      res.status(200).json({ message: 'Cliente adicionado à fila!' });
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      res.status(500).json({ error: 'Erro ao salvar os dados' });
    }
  },

  async listarPedidos(req: Request, res: Response) {
    try {
      const { id } = req.params;
  
      // Validação do ID
      const clienteId = parseInt(id);
      if (isNaN(clienteId)) {
        return res.status(400).json({ error: 'ID inválido' });
      }
      // Busca o cliente pelo ID
      const cliente = await prisma.clientes.findUnique({
        where: { id: clienteId },
      });
  
      // Verifica se o cliente foi encontrado
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
  
      // Retorna o cliente encontrado
      return res.json(cliente);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    };
  },

  async deletarCliente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const idValue = parseInt(id, 10); // Parse para número inteiro

      const cliente = await prisma.clientes.findUnique({ where: { id: idValue } });

      if (!cliente) {
        return res.status(404).json({
          error: true,
          message: 'Cliente não encontrado!'
        });
      }

      await prisma.clientes.delete({ where: { id: idValue } });

      res.json({
        error: false,
        message: 'Cliente excluído com sucesso!'
      });
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      res.status(500).json({ error: 'Erro ao excluir cliente' });
    }
  }
};
