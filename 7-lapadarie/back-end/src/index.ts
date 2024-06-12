import express from 'express';
import { router } from './Routers/routes'

const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(router)

const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});