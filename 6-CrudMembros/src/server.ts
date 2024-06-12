import express from "express"
import { Request, Response, Express } from "express"
import routes from "./routes/routes";
import cors from 'cors'

const server: Express = express();
const PORT = 3001;

server.use(cors())
server.use(express.json())

server.use("/usuario", routes)

server.get("/", (_req: Request, res:Response )=>{
    res.send("Primeira rota")
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})