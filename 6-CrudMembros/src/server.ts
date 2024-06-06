import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

// Carregar variáveis de ambiente
dotenv.config({ path: 'variaveis.env' });

const server: Application = express();

// Configurar middlewares
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

// Configurar rotas
server.use(routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
