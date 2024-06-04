import { PrismaClient } from "@prisma/client";
import express, {Request, Response} from 'express'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})