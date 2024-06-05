import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client"

const router = Router()
const prisma = new PrismaClient()

router.post("/", async (req: Request, res: Response) => {
    try {
        const { nome, idade, email, senha, estado, cidade } = req.body;

        if(nome.match(/[0-9]/) != null){
            throw new Error("O nome deve conter apenas letras!")
        }

        if(estado.match(/[^\w\s]/) != null || cidade.match(/[^\w\s]/) != null){
            throw new Error("Os campos de cidade e estado devem conter apenas letras");
        }

        if (typeof idade != "number") { 
            throw new Error("Idade inválida");
        }

        const addUser = await prisma.user.create({
            data: {
                nome: nome,
                idade: idade,
                email: email,
                senha: senha,
                estado: estado,
                cidade: cidade
            }
        })
        res.send("Usuário cadastrado!")
        res.status(200).json(addUser)

    } catch (error: any) {
        console.log("Erro detectado " + error)
        res.status(400).json({ msg: error });
    }
})

export default router;

