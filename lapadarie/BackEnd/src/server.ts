import { Prisma } from "@prisma/client";
import Express from "express";
import FilaController from "./controllers/FilaController";

const app = Express();
app.use(Express.json());
const PORT = 1080;
const VALOR_PAO = 2.50;
app.get('/', (request,response) => {
return response.send({message:"hello world"})
})
//metodos Get
app.get('/listarPedidos', FilaController.listarPedidos)
//metodos post
app.post('/createFila', FilaController.createFila )
//metodos delete
app.delete('/delete/:id', FilaController.deleteFila);



app.listen(PORT, () => {
    console.log('Server is runnin ${PORT}')
})