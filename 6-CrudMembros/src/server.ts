import express, { Request, Response, response } from "express"
import { configDotenv } from "dotenv"
import { Prisma, PrismaClient } from "@prisma/client"
import UserController from "./controllers/UserController"
import { prisma } from "./database"

const app = express()
app.use(express.json())
const port = 3000

app.post('/createUser', UserController.createUser)
app.get('/user/:id', UserController.getById)
app.get('/user/email/:email', UserController.getByEmail)
app.get('/user/name/:name', UserController.getbyName)
app.delete('/user/delete/:id', UserController.DeletebyId)
app.put('/user/:id', UserController.editById)

app.listen(port, () => {
  console.log(`Server is runing ${port}`)
})