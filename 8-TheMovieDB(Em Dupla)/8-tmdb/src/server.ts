import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
import { get } from 'http';

const app = express()
const port = process.env.PORT || 8080;
const prisma = new PrismaClient()
app.use(express.json())

app.listen(port, () =>
console.log(`Server running on port: ${port}`))

// REGISTRA USUÁRIO
app.put("/registrar",
    async (req: Request, res: Response) => {
        const {email, name, password} = req.body
        try {
            await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    password: password
                }
            })
            res.status(200).json({message: "Usuário registrado com sucesso"})
        } catch (error) {
            res.status(500).json({error:"Erro ao registrar usuário"})
        }
    }
)

// PEGA TODOS OS USUÁRIOS
app.get("/usuario", 
    async (req: Request, res: Response) => {
        try {
            const usuarios = await prisma.user.findMany()
            return res.status(200).json(usuarios)
        }catch(error){
            res.status(500).json({error: "Erro ao pegar a lista de usuários"})
        }
    }
)

// PEGA UM USUÁRIO, GET NORMAL
app.get("/usuario/:id",
    async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            const usuario = await prisma.user.findUnique({
                where: {id:Number(id)}
            })
            if (usuario) {
                return res.status(200).json(usuario)
            } else {
                res.status(404).json({error: "Usuário não pôde ser encontrado"})
            }
        } catch (error) {
            res.status(500).json({error:"Erro ao procurar usuário"})
        }
    }
)

//REALIZA GET COM PARÂMETROS DE LOGIN
app.get("/login",
    async (req: Request, res: Response) => {
        const {email, password} = req.params
        try {
            const usuario = await prisma.user.findUnique({
                where: {email:email}
            })
            if (usuario) {
                if (usuario.password === password) {
                    return res.status(200).json(usuario)
                } else {
                    res.status(401).json({error: "Credenciais de login incorretas"})
                }
            } else {
                res.status(404).json({error: "Usuário não pôde ser encontrado"})
            }
        } catch (error) {
            res.status(500).json({error:"Erro ao procurar usuário"})
        }
    }
)

// LISTA OS FAVORITOS DE UM USUÁRIO
app.get("/usuario/:id/favoritos",
    async (req: Request, res: Response) => {
        const {id} = req.params
        try {
            const usuario = await prisma.user.findUnique({
                where: {id:Number(id)},
                include: {favorites: true}
            })
            if (usuario) {
                return res.status(200).json(usuario.favorites)
            } else {
                res.status(404).json({error: "Usuário não pôde ser encontrado"})
            }
        } catch (error) {
            res.status(500).json({error:"Erro ao procurar usuário"})
        }
    }
)