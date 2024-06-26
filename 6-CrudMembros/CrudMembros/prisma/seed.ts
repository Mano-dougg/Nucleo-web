import { db } from "../src/utils/db.server";

type Member =  {
    name:string;
    email:string;
    password:string;
    birth:Date;
    state:string;
    city:string;
}

async function seed():Promise<void> {
    await Promise.all(
        getMember()
        .map((singeMember) => (
            db.membro.create({
                data: {
                    name: 'Bruno Emanoel Loiola Xavier',
                    email: 'brunoemanoela.l.x@gmail.com',
                    password: 'brunosenha',
                    birth: new Date(1),
                    state: 'Bahia',
                    city: 'Jacobina'
                }
            })
        ))
    )
    const oneMember = await db.membro.findUnique({
        where:{
            id:1
        }
    })    

    await Promise.all(
        getMember().map((singeMember)=>{
            const { name, email, password, birth, state, city } =singeMember;
            return db.membro.create({
                data: {
                    name,
                    email,
                    password,
                    birth,
                    state,
                    city
                }
            })
        })
    )
}

seed();

function getMember():Array<Member> {
    return[
        {
            name: 'Bruno Emanoel Loiola Xavier',
            email: 'belezaeestetica27@gmail.com',
            password: 'brunosenha',
            birth: new Date(1),
            state: 'Bahia',
            city: 'Jacobina'
        }
    ]
}