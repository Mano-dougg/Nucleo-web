import express, {Express, Request, Response} from "express"
import rootRouter from "./routes"
import { PrismaClient } from "@prisma/client"
import { errorMiddleware } from "./middlewares/errors"

const app:Express = express()

app.use(express.json())

app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
    log:['query']
})

app.use(errorMiddleware)

app.listen(3000, () => {console.log("Funcionando na porta 3000")})