import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export default {
 
// POSTS
    async createUser(req: Request , res: Response) {
        try {
            const {nome, email, senha, idade, estado, cidade, } = req.body
            
            let user = await prisma.user.findUnique({ where: {email}});

            // VALIDATIONS
            if(user) {return res.status(422).json({ error: "Já existe um usuario com este email" })}

            if(!email) {return res.status(422).json({ error: "Email é obrigatório" })} 

            if(!senha) {return res.status(422).json({ error: "Senha é obrigatória" })}


            user = await prisma.user.create({
                data: {
                    nome, 
                    email, 
                    senha, 
                    idade, 
                    estado, 
                    cidade,
                },
            })

            return res.status(201).json(user)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

    async registerUser(req: Request , res: Response) {
        try {
            const {nome, email, senha, idade, estado, cidade, } = req.body
            
            let user = await prisma.user.findUnique({ where: {email}});

            // VALIDATIONS
            if(user) {return res.status(422).json({ error: "Já existe um usuario com este email" })}

            if(!email) {return res.status(422).json({ error: "Email é obrigatório" })} 

            if(!senha) {return res.status(422).json({ error: "Senha é obrigatória" })}


            //create password
            const salt = await bcrypt.genSalt(12)
            const senhaHash = await bcrypt.hash(senha, salt)

            user = await prisma.user.create({
                data: {
                    nome, 
                    email, 
                    senha: senhaHash, 
                    idade, 
                    estado, 
                    cidade,
                },
            })

            return res.status(201).json(user)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

    async loginUser(req: Request , res: Response) {
       
        const {nome, email, senha, idade, estado, cidade, } = req.body
            
        let user = await prisma.user.findUnique({ where: {email}});

        // VALIDATIONS
        if(!user)  {return res.status(404).json({ msg: "Não foi possível encontrar esse membro" })}

        if(!email) {return res.status(422).json({ msg: "Email é obrigatório" })} 

        if(!senha) {return res.status(422).json({ msg: "Senha é obrigatória" })}

        //check if passoword match
        const checkSenha = await bcrypt.compare(senha, user.senha)

        if (!checkSenha) {return res.status(422).json({ error: "Senha inválida" })}
           
        try {
            const secret = process.env.SECRET

            const token = jwt.sign({
                id: user.id
            }, secret,)
            
            return res.status(201).json({ msg: "Autenticação realizada com sucesso", token })
        }

        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    },

// GETS
    async getUserId (req: Request, res: Response) {
        try {
            const {id} = req.params
            const user = await prisma.user.findUnique({where: {id: Number(id)}})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

    async getUserEmail (req: Request, res: Response) {
        try {
            const email = req.params.email
            const user = await prisma.user.findUnique({where: {email: email}})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }
            
            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

    async getUserNome (req: Request, res: Response) {
        try {
            const nome = req.params.nome
            const user = await prisma.user.findMany({where: {nome: String(nome)}})

            if (!user) {
                return res.status(200).status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

// PUTS
    async updateUserId (req: Request, res: Response) {
        try {
            const {id} = req.params
            const {email} = req.body
            let user = await prisma.user.findUnique({where: { id: Number(id) }})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            const userExist = await prisma.user.findMany({where: {email: email}})

            if (userExist) {
                return res.status(422).json({ error: "Já existe um usuario com este email" })
            }

            user = await prisma.user.update({
                where: { id: Number(id) },
                data: { email } 
            })

            return res.status(200).json(user)
        }

        catch {
            return res.json({ error })
        }
    },

// DELETES

    async deleteUserId (req: Request, res: Response) {
        try {
            const {id} = req.params
            let user = await prisma.user.findUnique({where: { id: Number(id) }})

            if (!user) {
                return res.status(422).json({ error: "Não foi possível encontrar esse membro"})
            }

            await prisma.user.delete({where: { id: Number(id) }})

            return res.status(200).json('Membro deletado')
        }

        catch {
            return res.json({ error })
        }
    },

   

}
