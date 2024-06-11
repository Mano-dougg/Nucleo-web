import { openDb } from "./configDB";
import express from "express";
// import { PrismaClient } from "@prisma/client";
import rotas from "../rotas/rotas";


const app = express()

openDb()

// const prisma = new PrismaClient()

const port = 4040

app.use(express.json())

app.use("/", rotas)

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
 });



// export {prisma}


