import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5020;
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cors());

//-- LISTAR USUARIOS
app.get(`/`,  async (req: Request, res: Response) => {
  try {
    const listaUsuarios = await prisma.usuario.findMany(); 
    if (!listaUsuarios) {
      return res.status(404).json({
        message: 'Banco de dados vazio!'
      })
    }
    res.json(listaUsuarios)

  } catch (error: any) {
    console.error('Erro ao encontrar usuários no banco de dados:', error);
    res.status(500).json({ message: 'Erro ao tentar encontrar usuários no banco de dados' });
  }
});

//-- PESQUISAR POR ID
app.get(`/id/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idExiste = await prisma.usuario.findUnique({
      where: { id: Number(id) }
    });
    if (!idExiste) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      })
    };
    console.log(idExiste);
    res.status(201).json(idExiste);

  } catch(error: any) {
    console.error('Erro ao tentar encontrar usuário via "id":', error);
    res.status(500).json({ message: 'Erro ao tentar encontrar usuário via "id"' });
  }
});

//-- PESQUISAR POR EMAIL
app.get(`/email/:email`, async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const emailExiste = await prisma.usuario.findUnique({
      where: { email: email}
    });
    if (!emailExiste) {
    return res.status(404).json({
      message: 'Usuário não encontrado'
      })
    };
    res.json(emailExiste);

  } catch (error: any) {
    console.error('Erro ao tentar encontrar usuário via "email":', error);
    res.status(500).json({ message: 'Erro ao tentar encontrar usuário via "email"' });
  }
});

//-- PESQUISAR POR NOME
app.get(`/nome/:nome`,  async (req: Request, res: Response) => {
  try {
    const { nome } = req.params;
    const pesquisarNome = await prisma.usuario.findMany({
      where: { nome: {contains: nome} }
    });
    if (pesquisarNome.length == 0) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      })
    };
    console.log(pesquisarNome)
    res.json(pesquisarNome);

  } catch (error: any) {
    console.error('Erro ao tentar encontrar usuários via "nome":', error);
    res.status(500).json({ message: 'Erro ao tentar encontrar usuários via "nome"' });
  }
});

//-- CRIAR USUARIO
app.post(`/create`, async (req: Request, res: Response) => {
  try {
    const { email, senha, nome, idade, cidade, estado } = req.body;
    const emailExiste = await prisma.usuario.findUnique({ 
      where: { email: email }
    });
    if (emailExiste) {
      return res.status(400).json({
        message: 'E-mail já cadastrado no sistema!'
      })
    };
    const criarUsuario = await prisma.usuario.create({
      data: {
        email,
        senha,
        nome,
        idade: Number(idade),
        cidade,
        estado
      },
    });
    console.log(criarUsuario);
    res.status(201).json(criarUsuario);

  } catch (error: any) {
    console.error('Erro ao tentar adicionar usuário:', error);
    res.status(500).json({ message: 'Erro ao tentar adicionar usuário' });
  }
});

//-- ATUALIZAR USUARIO
app.put(`/update/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, senha, nome, cidade, estado } = req.body;
    const emailExiste = await prisma.usuario.findUnique({
      where: { email: email }
    });
    if (emailExiste) {
      return res.status(400).json({
        message: 'E-mail já cadastrado no sistema!'
      })
    };
    const atualizarUsuario = await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        email: email,
        senha: senha,
        nome: nome,
        cidade: cidade,
        estado: estado
      }
    });
    console.log('Usuario atualizado com sucesso!')
    res.json(atualizarUsuario)

  } catch (error: any) {
    console.error('Erro ao tentar atualizar as informações do usuário:', error);
    res.status(500).json({ message: 'Erro ao tentar atualizar as informações do usuário' });
  }
});

//-- DELETAR USUARIO
app.delete(`/delete/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idExiste = await prisma.usuario.findUnique({
      where: { id: Number(id) }
    });
    if (!idExiste) {
      return res.status(404).json({
        message: 'Usuário não encontrado'
      })
    };
    const excluirUsuario = await prisma.usuario.delete({
      where: { 
        id: Number(id), 
      },
    });
    console.log(excluirUsuario);
    res.json(excluirUsuario);

  } catch (error: any) {
    console.error('Erro ao tentar excluir usuário:', error);
    res.status(500).json({ message: 'Erro ao tentar excluir usuário' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});