import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


export async function POST(req: Request, { params }: { params: { id: string } }){
    try{
        const { matchId, isWinner, word, isFinished } =  await req.json()
        const match = await prisma.match.update({
            where:{
                id: matchId
            },
            data:{
                isWinner,
                word,
                isFinished
            }
        })

        return NextResponse.json({message:"OK"})
    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
    

}