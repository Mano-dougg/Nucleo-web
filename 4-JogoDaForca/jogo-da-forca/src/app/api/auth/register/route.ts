import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request){
    try{
        const { name, email, password } = await req.json()

        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(user){
            return NextResponse.json({ error:"User already exists" }, {status:400})
        }
        
        const hashedPassword = await hash(password, 10)

        await prisma.user.create({
            data:{
                email,
                password: hashedPassword,
                name
            }
        })

        return NextResponse.json({ message:"Success" })
    } catch (e){
        console.log(e)
        return NextResponse.json({ error:"A server error occurred" }, {status:400})
    }
}