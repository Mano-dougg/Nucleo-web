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

app.post('/createFila', FilaController.createFila )


app.listen(PORT, () => {
    console.log('Server is runnin ${PORT}')
})