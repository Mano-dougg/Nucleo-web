import express from "express"
import { Request, Response, Express } from "express"
import router from "./crud";

const server: Express = express();
const PORT = 3001;

server.use(express.json())

server.use("/usuario", router)

server.get("/", (_req: Request, res:Response )=>{
    res.send("Primeira rota")
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})