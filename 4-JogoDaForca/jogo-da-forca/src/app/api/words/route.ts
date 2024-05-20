import { NextApiRequest } from "next"
import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"

export async function POST(req: Request) {
    try{
        const { id } = await req.json()

        const words = await prisma.word.delete({
            where:{
                id
            }
        })

        return NextResponse.json({message: "success"})

    }catch(e){
        console.log(e)
        return NextResponse.json({error: "An error occurred"}, {status: 400})
    }
}