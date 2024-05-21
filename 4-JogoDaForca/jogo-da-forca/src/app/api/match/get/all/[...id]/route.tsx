import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import prisma from "../../../../../../../lib/prisma";
export async function GET(req: NextApiRequest, { params }: { params: { id: string } }){
    try{
        const id = params.id[0]
        
        const matches = await prisma.match.findMany({
            where:{
                userId: id
            },
            orderBy:{
                createdAt: 'desc'
            }
        })

        return NextResponse.json({message:matches})
    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
}