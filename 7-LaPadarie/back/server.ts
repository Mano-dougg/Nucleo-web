import {Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import FilaController from './controllers/FilaController';
import PaoController from './controllers/PaoController';

const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const cors = require('cors')
const port = 1080;
const prisma = new PrismaClient();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(cors());
app.use((req: Request, res: Response, next: any)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
})


//metodos Get
app.get('/clientes', FilaController.listarPedidos);
app.get('/pedidos/:id', FilaController.listarPedidos);
//metodos post
app.post('/novoCliente', FilaController.criarCliente);
app.get('/novoPreco');
//metodos delete
app.delete('/deletar/:id', FilaController.deletarCliente);
//-- Pagina inicial
app.get('/', async (req: Request, res: Response)=> {
  try{
    const clientes = await prisma.clientes.findMany();
    res.json(clientes);
  } catch {
    res.send('Banco de dados vazio')
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});