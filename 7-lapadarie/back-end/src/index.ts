import express from 'express';
import { router } from './Routers/routes'

const app = express();
app.use(express.json());
app.use(router)
const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});