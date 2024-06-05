import express from 'express';
import Rotas from './rotas/rt';
import { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', Rotas)

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json('O CORTE AMERICANO');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});