import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


export async function POST(req: Request, { params }: { params: { id: string } }){
    try{
        const { word, userId } =  await req.json()

        const match = await prisma.match.create({
            data:{
                word,
                userId
            },
        })

        return NextResponse.json({message:"OK", data:match.id})
    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
    

}