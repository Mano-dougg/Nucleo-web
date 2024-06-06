import prisma from "../prisma";
import { Request, Response } from "express";

export async function cadastro(req: Request, res: Response) {
    try {
        const { nome, idade, email, senha, estado, cidade } = req.body;

        if (nome.match(/[0-9]/) != null) {
            throw new Error("O nome deve conter apenas letras!");
        }
        if (estado.match(/[^\w\s]/) != null || cidade.match(/[^\w\s]/) != null) {
            throw new Error("Os campos de cidade e estado devem conter apenas letras");
        }
        if (typeof idade != "number") {
            throw new Error("Idade inválida");
        }

        const userEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (userEmail !== null) {
            throw new Error("Esse email já está cadastrado!")
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
        res.status(200).json({ msg: "Usuário cadastrado!", user: addUser });
    } catch (error: any) {
        console.log(error)
        res.status(400).json({ msg: "Erro encontrado", erro: error.message });
    }
}

export async function userPorID(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)

        if (id.toString().match(/[a-z][A-Z]/g) !== null) {
            throw new Error("Id deve conter apenas números!")
        }

        const users = await prisma.user.findUnique({ where: { id: id } })

        res.status(200).json({ msg: "Usuário cadastrado!", user: users });
    } catch (error: any) {
        console.log("Erro detectado: " + error)
        res.status(400).json({ msg: error.message })
    }
}

export async function userPorEmail(req: Request, res: Response) {
    try {
        const email = req.params.email
        const users = await prisma.user.findUnique({ where: { email: email } })

        res.status(200).json({ msg: "Usuário cadastrado!", user: users });
    } catch (error) {
        console.log("Email não encontrao em nosso banco de dados ")
        res.status(400).json({ msg: "Email não encontrao em nosso banco de dados" })
    }
}

export async function userPorNome(req: Request, res: Response) {
    try {
        const nome = req.params.nome
        const users = await prisma.user.findMany({ where: { nome: nome } })

        res.status(200).json({ msg: "Usuários encontrados!", user: users });
    } catch (error) {
        console.log("nome não encontrao em nosso banco de dados ")
        res.status(400).json({ msg: "nome não encontrao em nosso banco de dados" })
    }
}

export async function deletarUser(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)

        if (id.toString().match(/[a-z][A-Z]/g) !== null) {
            throw new Error("Id deve conter apenas números!")
        }

        const users = await prisma.user.delete({ where: { id: id } })

        res.status(200).json({ msg: "Usuário deletado!", user: users });
    } catch (error: any) {
        console.log("Erro detectado: " + error)
        res.status(400).json({ msg: error.message })
    }
}

export async function atualizar(req: Request, res: Response) {

    try {
        const id = Number(req.params.id)

        if (id.toString().match(/[a-z][A-Z]/g) !== null) {
            throw new Error("Id deve conter apenas números!")
        }

        const { nome, idade, email, senha, estado, cidade } = req.body

        const userEmail = await prisma.user.findUnique({ where: { email: email } })

        if (userEmail != null) {
            throw new Error("Email já cadastrado")
        }

        if (estado.match(/[^\w\s]/) != null || cidade.match(/[^\w\s]/) != null) {
            throw new Error("Os campos de cidade e estado devem conter apenas letras");
        }
        if (typeof idade != "number") {
            throw new Error("Idade inválida");
        }

        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                idade: idade,
                email: email,
                senha: senha,
                estado: estado,
                cidade: cidade
            }
        })
        res.status(200).json({ msg: "Usuário cadastrado!", user: user });
    } catch (error: any) {
        res.status(400).json({ msg: "Erro detectado", erro: error.message })
    }

}