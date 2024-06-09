import express from "express";
import type { Request, Response } from "express";
import { body, validationResult} from "express-validator"

import * as MemberService from "./member.service"
import { Prisma } from "@prisma/client";

export const memberRouter = express.Router();

// GET: pegar uma lista de todos os membros ou buscar por email ou nome

memberRouter.get("/", async (request:Request, response:Response) =>{
    try{
        const { email, name } = request.query;
        if(email){
            const member = await MemberService.getMemberByEmail(email as string);
            if(name && member){
                return member.name===name?
                response.status(200).json(member)
                :response.status(204).json("Não há correlação")
            }
            return member?
            response.status(200).json(member)
            :response.status(404).json("Email não cadastrado");
        }
        else if(name){
            const members = await MemberService.listMembersByName(name as string);
            return members?
            response.status(200).json(members)
            :response.status(404).json(`Nenhum usuário de nome ${name} não cadastrada`);
        }

        const members = await MemberService.listMembers();
        return response.status(200).json(members);
        
    } catch(error: any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === "P1011"){
                return response.status(401).json(`Usuário teve acesso negado para o serviço`)
            }
        }
        return response.status(500).json(`uepa${error.code} 
             ${error.message}`);
    }
})

// GET: pegar membro por id
memberRouter.get("/:id", async (request:Request, response:Response) =>{
    try{
        const member = await MemberService.getMemberById(parseInt(request.params.id, 10))
        return member?
        response.status(200).json(member)
        :response.status(404).json("Membro não encontrado");
    } catch (error:any){
        return response.status(500).json(error.message);
    }
})

// POST: criar novo cadastro de membro

memberRouter.post("/",
    body("name").isString().withMessage("Name must be a string"),
    body("email").isEmail().withMessage("Email must be a valid email address"),
    body("password").isString().withMessage("Password must be a string"),
    body("birth").isISO8601().withMessage("Birth date must be in ISO8601 format"),
    body("state").isString().withMessage("State must be a string"),
    body("city").isString().withMessage("City must be a string"),
    async (request: Request, response: Response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const customErrors = errors.array().map(err => {
                if("path" in err){
                switch (err.path) {
                    case "name":
                        return { param: err.path, msg: "Nome inválido: nome é um campo obrigatório e deve ser um string válido" };
                    case "email":
                        return { param: err.path, msg: "Email inválido: email é um campo obrigatório e deve ser um endereço de email válido" };
                    case "birth":
                        return { param: err.path, msg: "Data de nascimento inválida: data de nascimento é um campo obrigatório e deve estar no formato ISO8601" };
                    case "state":
                        return { param: err.path, msg: "Estado inválido: estado é um campo obrigatório e deve ser um string válido" };
                    case "city":
                        return { param: err.path, msg: "Cidade inválida: cidade é um campo obrigatório e deve ser um string válido" };
                    default:
                        return { param: err.path, msg: `${err.path} inválido: ${err.path} é um campo obrigatório e deve ser válido` };
                }}
                return err
            });

            return response.status(400).json({
                errors: customErrors
            });
        }


        try{
            const member = request.body;
            const newMember = await MemberService.createMember(member);
            return response.status(201).json(newMember)
        } catch(error:any){
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P1011"){
                    return response.status(401).json(`Usuário teve acesso negado para o serviço`)
                } else if (error.code === "P2002"){
                    return response.status(409).json(`Endereço de email já cadastrado`)
                }
                return response.status(500).json(`${error.code}: ${error.message}`)
            }
            return response.status(500).json(error.message);
        }
    }
)

// PUT: atualizar usuário por id

memberRouter.put("/:id",
    body("name").isString().withMessage("Name must be a string"),
    body("email").isEmail().withMessage("Email must be a valid email address"),
    body("password").isString().withMessage("Password must be a string"),
    body("birth").isISO8601().withMessage("Birth date must be in ISO8601 format"),
    body("state").isString().withMessage("State must be a string"),
    body("city").isString().withMessage("City must be a string"),
    async (request: Request, response: Response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const customErrors = errors.array().map(err => {
                if("path" in err){
                switch (err.path) {
                    case "name":
                        return { param: err.path, msg: "Nome inválido: nome é um campo obrigatório e deve ser um string válido" };
                    case "email":
                        return { param: err.path, msg: "Email inválido: email é um campo obrigatório e deve ser um endereço de email válido" };
                    case "birth":
                        return { param: err.path, msg: "Data de nascimento inválida: data de nascimento é um campo obrigatório e deve estar no formato ISO8601" };
                    case "state":
                        return { param: err.path, msg: "Estado inválido: estado é um campo obrigatório e deve ser um string válido" };
                    case "city":
                        return { param: err.path, msg: "Cidade inválida: cidade é um campo obrigatório e deve ser um string válido" };
                    default:
                        return { param: err.path, msg: `${err.path} inválido: ${err.path} é um campo obrigatório e deve ser válido` };
                }}
                return err
            });

            return response.status(400).json({
                errors: customErrors
            });
        }

        
        const id: number = parseInt(request.params.id, 10)
        try{
            const member = request.body;
            const updatedMember = await MemberService.updateMember(member, id)
            return response.status(200).json(updatedMember)
        } catch (error:any) {
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P1011"){
                    return response.status(401).json(`Usuário teve acesso negado para o serviço`)
                } else if (error.code === "P2002"){
                    return response.status(409).json(`Endereço de email já cadastrado`)
                } else if (error.code === "P2025"){
                    return response.status(404).json("Usuário não encontrado")
                }
                return response.status(500).json(`${error.code}: ${error.message}`)
            }
            return response.status(500).json(error.message);
        }
    }
)

//

memberRouter.delete("/:id", async(request: Request, response:Response)=>{
    const id: number = parseInt(request.params.id);
    try{
        await MemberService.deleteMemberById(id);
        return response.status(204).json("Member has been successfully deleted");
    } catch (error:any){
        return response.status(500).json(error.message);
    }
})