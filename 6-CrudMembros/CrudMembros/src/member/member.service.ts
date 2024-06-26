import { Membro } from "@prisma/client"
import { db } from "../utils/db.server"

type PublicMember = {
    name:string;
    email:string;
    birth:Date;
    state:string;
    city:string;
}

export const listMembers = async (): Promise<PublicMember[]> =>(
    db.membro.findMany({
        select: {
            id:true,
            name: true,
            password:false,
            email: true,
            birth: true,
            state: true,
            city: true
        }
    })
)

export const listMembersByName = async (name:string): Promise<PublicMember[]> =>(
    db.membro.findMany({
        where: {
            name
        },
        select: {
            id:true,
            name: true,
            password:false,
            email: true,
            birth: true,
            state: true,
            city: true
        }
    })
)

export const getMemberById = async (id: number) => (
    db.membro.findUnique({
        where:{
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            birth: true,
            state: true,
            city: true
        }
    })
)

export const getMemberByEmail = async (email: string) => (
    db.membro.findUnique({
        where:{
            email
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            birth: true,
            state: true,
            city: true
        }
    })
)

export const createMember = async(
    newMember: Omit<Membro, "id">
): Promise<Membro> =>{
    const { name, email, password, birth, state, city } = newMember;
    return db.membro.create({
        data: {
            name,
            email,
            password,
            birth,
            state,
            city
        },
        select: {
            id:true,
            name:true,
            email: true,
            password: true,
            birth: true,
            state: true,
            city: true

        }
    })
}

export const updateMember = async(
    existingMember : Omit<Membro, "id">,
    id:number
): Promise<Membro> => {
    const { name, email, password, birth, state, city } = existingMember;
    return db.membro.update({
        where:{
            id
        },
        data: {
            name,
            email,
            password,
            birth,
            state,
            city
        },
        select: {
            id:true,
            name:true,
            email: true,
            password: true,
            birth: true,
            state: true,
            city: true
        }
    })
}

export const deleteMemberById = async (id:number): Promise<Membro> => {
    return db.membro.delete({
        where:{
            id
        }
    })
}