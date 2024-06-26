import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 8080;
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors({origin: '*'}))

app.listen(port, () =>
console.log(`Server running on port: ${port}`))

// REGISTRA USUÁRIO
app.post("/registrar",
    async (req: Request, res: Response) => {
        console.log("começa função")
        const {email, name, password} = req.body
        console.log("peguei body")
        try {
            console.log("começa try")
            await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    password: password,
                }
            })
            if(!email) console.log("NOT email")
            if(!name) console.log("NOT nome")
            if(!password) console.log("NOT senha")
            
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

app.post("/usuario/:userId/favoritos/:filmeId",
    async (req: Request, res: Response) => {
        const { userId, filmeId } = req.params
        console.log("User ID: ", userId)
        console.log("Filme ID:", filmeId)
        try {
            const usuario = await prisma.user.findUnique({
                where: { id: Number(userId) }
            })

            if (!usuario) { return res.status(404).json({ error: "Usuário não encontrado" }) }

            const favoritoExistente = await prisma.favoritos.findFirst({
                where: {
                    userId: Number(userId),
                    movieId: Number(filmeId)
                }
            })

            if (favoritoExistente) {
                return res.status(400).json({ error: "Filme já está favoritado" })
            }
            await prisma.favoritos.create({
                data: {
                    userId: Number(userId),
                    movieId: Number(filmeId),
                }
            })

            return res.status(200).json({ message: "Filme adicionado aos favoritos com sucesso" })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro desconhecido" })
        }
    }
)

app.delete("/usuario/:idUser/favoritos/:filmeId",
    async (req: Request, res: Response) => {
        const {idUser, filmeId} = req.params
        try {
            const usuario = await prisma.user.findUnique({
                where: {id:Number(idUser)},
            })
            if (usuario) {
                const favorito = await prisma.favoritos.findFirst({
                    where: {
                        userId: Number(idUser),
                        movieId: Number(filmeId)
                    }
                })
                if (favorito) {
                    await prisma.favoritos.delete({
                        where: {
                            userId: Number(idUser),
                            movieId: Number(filmeId)
                        }
                    })
                    return res.status(200).json({ message: "Favorito removido com sucesso" })
                } else {
                    return res.status(404).json({ error: "Favorito não encontrado" })
                }
            } else {
                return res.status(404).json({ error: "Usuário não encontrado" })
            }
        } catch (error) {
            console.error(error)
            return res.status(500).json({error:"Erro desconhecido"})
        }
    }
)