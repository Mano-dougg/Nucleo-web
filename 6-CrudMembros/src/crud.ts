import { Request, Response, Router } from "express";
import {PrismaClient} from "@prisma/client"

const router = Router()
const prisma = new PrismaClient()

router.post("/", async (req:Request, res:Response) =>{
    try{
        const {nome, idade, email, senha, estado, cidade}:
        {nome:string, idade:number, email:string, senha:string, estado:string, cidade:string} = req.body;

        const addUser = await prisma.user.create({
            data:{
                nome: nome,
                idade: idade,
                email: email,
                senha: senha,
                estado: estado,
                cidade: cidade
            }
        })
    }catch(error) {
        console.log(error)
    }
   

})


