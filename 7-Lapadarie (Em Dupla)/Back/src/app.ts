import { PrismaClient } from '@prisma/client';
import express from 'express';
import { Request, Response } from 'express';
import router from './routes/rotas';

const cors = require('cors');
const app = express();
const prisma = new PrismaClient();

app.use(cors()); 

app.use(express.json());

app.use('/', router);

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Servidor ${PORT}`);
});

export {prisma}