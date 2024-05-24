import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request, { params }: { params: { id: string } }){
    try{
        const { userId, wordsToAdd } =  await req.json()
        
        for(const word of wordsToAdd){
            await prisma.word.create({
                data:{
                    word: word,
                    userId: userId
                }
            })
        }

        return NextResponse.json({message:"OK"})
    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
    

}