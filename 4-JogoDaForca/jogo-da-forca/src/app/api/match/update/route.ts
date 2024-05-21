import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


export async function POST(req: Request, { params }: { params: { id: string } }){
    try{
        const { matchId, isWinner, word } =  await req.json()
        console.log(word)
        const match = await prisma.match.update({
            where:{
                id: matchId
            },
            data:{
                isWinner,
                word
            }
        })

        return NextResponse.json({message:"OK"})
    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
    

}