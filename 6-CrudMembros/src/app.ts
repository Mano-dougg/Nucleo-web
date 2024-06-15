import express from 'express';
import { Request, Response } from 'express';
import { openDb } from './organiza';
import { configDotenv } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import usuar from './conexoes/usuar';
import router from './rotas/rt';

const app = express();
const prisma = new PrismaClient();
openDb();
configDotenv()

app.use(express.json());

app.use('/', router);

const PORT = 4005;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});

export {prisma}

