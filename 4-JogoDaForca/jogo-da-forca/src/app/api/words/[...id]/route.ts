import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { NextApiRequest } from "next";
export async function GET(req: NextApiRequest, { params }: { params: { id: string } }){
    try{
        const id = params.id[0]
        
        const words = await prisma.word.findMany({
            where:{
                userId: id
            },
            select:{
                word: true,
                id: true
            }
        })

        return NextResponse.json({message:words})
    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
}