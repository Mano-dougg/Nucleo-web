import express from "express";
import type { Request, Response } from "express";
import { body, validationResult} from "express-validator"

import * as MemberService from "./member.service"

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
                :response.status(204).json("No correlation")
            }
            return response.status(200).json(member);
        }
        else if(name){
            const members = await MemberService.listMembersByName(name as string);
            return response.status(200).json(members);
        }

        const members = await MemberService.listMembers();
        return response.status(200).json(members);
        
    } catch(error: any) {
        return response.status(500).json(error.message);
    }
})

// GET: pegar membro por id
memberRouter.get("/:id", async (request:Request, response:Response) =>{
    try{
        const member = await MemberService.getMemberById(parseInt(request.params.id, 10))
        return response.status(200).json(member);
    } catch (error:any){
        return response.status(500).json(error.message);
    }
})

// POST: criar novo cadastro de membro

memberRouter.post("/",
    body("name").isString(),
    body("email").isString(), 
    body("password").isString(),
    body("birth").isISO8601(), 
    body("state").isString(),
    body("city").isString(),
    async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()) {
            return response.status(400).json({
                errors:errors.array()
            });
        }
        try{
            const member = request.body;
            const newMember = await MemberService.createMember(member);
            return response.status(201).json(newMember)
        } catch(error:any){
            return response.status(500).json(error.message);
        }
    }
)

// PUT: atualizar usuário por id

memberRouter.put("/:id",
    body("name").isString(),
    body("email").isString(), 
    body("password").isString(),
    body("birth").isISO8601(), 
    body("state").isString(),
    body("city").isString(),
    async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()) {
            return response.status(400).json({
                errors:errors.array()
            });
        }
        const id: number = parseInt(request.params.id, 10)
        try {
            const member = request.body;
            const updatedMember = await MemberService.updateMember(member, id)
            return response.status(200).json(updatedMember)
        } catch (error:any) {
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